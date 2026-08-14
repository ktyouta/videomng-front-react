import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../../../app/components/QueryApp";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";
import { errResType, resSchema } from "../../../../../../hooks/useMutationWrapperBase";
import { useReplaceQuery } from "../../../../../../hooks/useReplaceQuery";
import { api } from "../../../../../../lib/apiClient";
import { getSearchKeyWord } from "../../../../api/getSearchKeyWord";
import { videoKeys } from "../../../../api/queryKey";
import { REACENT_KEYWORD } from "../../../../const/HomeConst";
import { SearchWordType } from "../../../../types/videolist/SearchWordType";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";
import { useHomeVideoSearchConditionValue } from "../../useHomeVideoSearchConditionValue";
import { useFrequentKeywords } from "./useFrequentKeywords";
import { useRecentKeyword } from "./useRecentKeyword";

export function useHomeRecentKeywords() {

    // 最近の検索リスト
    const [recentWordList, setRecentWordList] = useState<SearchWordType[]>([]);
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
    // 最近の検索実績(API取得)
    const { data } = getSearchKeyWord({
        enabled: isLogin,
        select: (data) => {
            return data.data.recent;
        }
    });

    /**
     * 検索実績削除
     */
    const deleteKeyWordMutation = useMutation({
        mutationFn: async (id: number) => {
            await api.delete(`${VIDEO_MNG_PATH}${ENV.SEARCH_WORD}/${id}`);
        },
        onSettled: () => {
            // 最近の検索リストを再取得
            queryClient.invalidateQueries(videoKeys.searchKeyWordLists());
        },
        onSuccess: (res: unknown) => {
            // レスポンスの型チェック
            const resParsed = resSchema().safeParse(res);
            if (!resParsed.success) {
                toast.error(`最近の検索の削除に失敗しました。時間をおいて再度お試しください。`);
                return;
            }
        },
        onError: (res: errResType) => {
            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
        }
    });

    // ローカルストレージから最近の検索リストを取得
    useEffect(() => {
        if (isLogin) {
            return;
        }

        const wordList = JSON.parse(localStorage.getItem(REACENT_KEYWORD) || "[]") as string[];
        setRecentWordList(wordList.map((e) => {
            return { id: 0, word: e };
        }));
    }, [isLogin]);

    /**
     * キーワードクリックイベント
     */
    function clickKeyWord(keyword: string,) {

        setInputKeyword(keyword);

        // 現在の検索条件を更新
        setNowSearchCondition((e) => {

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
        const nowWordList = JSON.parse(localStorage.getItem(REACENT_KEYWORD) || "[]") as string[];

        // ローカルストレージに検索ワードを保存
        const newWordList = [...nowWordList.filter((e) => e !== word.trim())];
        localStorage.setItem(REACENT_KEYWORD, JSON.stringify(newWordList));

        setRecentWordList(newWordList.map((e) => {
            return { id: 0, word: e };
        }));
    }

    return {
        recentWordList: isLogin ? data : recentWordList,
        clickKeyWord,
        deleteKeyWord,
    }
}