import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../../../app/components/QueryApp";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";
import { errResType } from "../../../../../../hooks/useMutationWrapperBase";
import { useReplaceQuery } from "../../../../../../hooks/useReplaceQuery";
import { api } from "../../../../../../lib/apiClient";
import { getFavoriteSearchKeyWord } from "../../../../api/getFavoriteSearchKeyWord";
import { videoKeys } from "../../../../api/queryKey";
import { nowSearchConditionType } from "../../../../components/HomeVideoNowSearchConditionValueProvider";
import { FAVORITE_KEYWORD } from "../../../../const/HomeConst";
import { FavoriteSearchWordResponseType } from "../../../../types/videolist/FavoriteSearchWordResponseType";
import { SearchWordType } from "../../../../types/videolist/SearchWordType";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";
import { useHomeVideoSearchConditionValue } from "../../useHomeVideoSearchConditionValue";
import { useFrequentKeywords } from "./useFrequentKeywords";
import { useRecentKeyword } from "./useRecentKeyword";

export function useHomeFavoriteKeywords() {

    // お気に入りワードリスト
    const [favoriteWordList, setFavoriteWordList] = useState<SearchWordType[]>([]);
    // 最近の検索ワード保存用
    const { saveRecentKeyword } = useRecentKeyword();
    // あなたがよく検索するワード保存用
    const { saveFrequentKeyword } = useFrequentKeywords();
    // 動画検索条件
    const { setInputKeyword,
        selectedVideoCategory,
        selectedVideoType } = useHomeVideoSearchConditionValue();
    // 現在の検索条件
    const { nowSearchCondition, setNowSearchCondition } = useHomeVideoNowSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateHomeVideoListQuery({ nowSearchCondition });
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // 検索実績再取得用
    const queryClient = useQueryClient();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // お気に入りワード(API取得)
    const { data } = getFavoriteSearchKeyWord({
        enabled: isLogin,
        select: (data) => {
            return data.data;
        }
    });

    /**
     * お気に入りワード削除
     */
    const deleteKeyWordMutation = useMutation({
        mutationFn: async (id: number) => {
            await api.delete(`${VIDEO_MNG_PATH}${ENV.FAVORITE_SEARCH_WORD}/${id}`);
        },
        onMutate: async (id: number) => {
            // 直後の即時反映が進行中の取得結果で上書きされないようにキャンセル
            await queryClient.cancelQueries(videoKeys.favoriteSearchKeyWordLists());

            // ロールバック用に現在のキャッシュを退避
            const previousData = queryClient.getQueryData<FavoriteSearchWordResponseType>(videoKeys.favoriteSearchKeyWordLists());

            // 対象キーワードを除いたリストを即時反映
            queryClient.setQueryData<FavoriteSearchWordResponseType | undefined>(videoKeys.favoriteSearchKeyWordLists(), (old) => {
                if (!old) {
                    return old;
                }

                return {
                    ...old,
                    data: old.data.filter((e) => e.id !== id),
                };
            });

            return { previousData };
        },
        onError: (res: errResType, _id, context) => {
            // 退避しておいたキャッシュにロールバック
            if (context?.previousData) {
                queryClient.setQueryData(videoKeys.favoriteSearchKeyWordLists(), context.previousData);
            }

            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        },
        onSettled: () => {
            // お気に入りワードを再取得
            queryClient.invalidateQueries(videoKeys.favoriteSearchKeyWordLists());
        },
    });

    // ローカルストレージからお気に入りワードを取得
    useEffect(() => {
        if (isLogin) {
            return;
        }

        const wordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];
        setFavoriteWordList(wordList.map((e) => {
            return { id: 0, word: e };
        }));
    }, [isLogin]);

    /**
     * キーワードクリックイベント
     */
    function clickKeyWord(keyword: string,) {

        setInputKeyword(keyword);

        // 現在の検索条件を更新
        setNowSearchCondition((e: nowSearchConditionType) => {

            const newCondition = {
                ...e,
                keyword,
                type: selectedVideoType,
                catetory: selectedVideoCategory,
            }

            return newCondition;
        });

        const newQuery = create({
            q: keyword,
            videoCategory: selectedVideoCategory,
            videoType: selectedVideoType
        });

        // クエリパラメータを更新
        replace(newQuery);

        // ローカルストレージの検索ワード(最近の検索)を保存
        saveRecentKeyword(keyword);

        // ローカルストレージの検索ワード(あなたがよく検索するワード)を保存
        saveFrequentKeyword(keyword);
    }

    /**
     * キーワード削除イベント
     */
    function deleteKeyWord(keyword: SearchWordType) {

        // ログイン中は削除APIをコール
        if (isLogin) {
            deleteKeyWordMutation.mutate(keyword.id);
            return;
        }

        const word = keyword.word;
        // ローカルストレージから検索ワードを取得
        const nowWordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];

        // ローカルストレージに検索ワードを保存
        const newWordList = [...nowWordList.filter((e) => e !== word.trim())];
        localStorage.setItem(FAVORITE_KEYWORD, JSON.stringify(newWordList));

        setFavoriteWordList(newWordList.map((e) => {
            return { id: 0, word: e };
        }));
    }

    return {
        favoriteWordList: isLogin ? data : favoriteWordList,
        clickKeyWord,
        deleteKeyWord,
    }
}