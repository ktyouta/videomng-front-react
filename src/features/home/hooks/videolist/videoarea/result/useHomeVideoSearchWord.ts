import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../../../app/components/QueryApp";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";
import { errResType } from "../../../../../../hooks/useMutationWrapperBase";
import { api } from "../../../../../../lib/apiClient";
import { getFavoriteSearchKeyWord } from "../../../../api/getFavoriteSearchKeyWord";
import { videoKeys } from "../../../../api/queryKey";
import { FAVORITE_KEYWORD, FAVORITE_KEYWORD_MAX } from "../../../../const/HomeConst";
import { FavoriteSearchWordResponseType } from "../../../../types/videolist/FavoriteSearchWordResponseType";
import { SearchWordType } from "../../../../types/videolist/SearchWordType";
import { useFavoriteKeyword } from "../default/useFavoriteKeyword";

export function useHomeVideoSearchWord() {

    // お気に入りワードリスト
    const [favoriteWordList, setFavoriteWordList] = useState<SearchWordType[]>([]);
    // お気に入りワード保存用
    const { saveFavoriteKeyword } = useFavoriteKeyword();
    // お気に入りワード再取得用
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
     * お気に入りワード登録
     */
    const createFavoriteWordMutation = useMutation({
        mutationFn: async (keyword: string) => {
            await api.post(`${VIDEO_MNG_PATH}${ENV.FAVORITE_SEARCH_WORD}`, { word: keyword });
        },
        onMutate: async (keyword: string) => {
            // 直後の即時反映が進行中の取得結果で上書きされないようにキャンセル
            await queryClient.cancelQueries(videoKeys.favoriteSearchKeyWordLists());

            // ロールバック用に現在のキャッシュを退避
            const previousData = queryClient.getQueryData<FavoriteSearchWordResponseType>(videoKeys.favoriteSearchKeyWordLists());

            // 新規キーワードを追加したリストを即時反映
            queryClient.setQueryData<FavoriteSearchWordResponseType | undefined>(videoKeys.favoriteSearchKeyWordLists(), (old) => {
                if (!old) {
                    return old;
                }

                return {
                    ...old,
                    data: [...old.data, {
                        id: 0,
                        word: keyword
                    }],
                };
            });

            return { previousData };
        },
        onSuccess: () => {
            toast.success(`お気に入りワードに登録しました。`);
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

    // ローカルストレージからお気に入りワードリストを取得
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
     * お気に入りワード追加
     * @param keyword 
     */
    function addFavoriteWord(keyword: string) {

        // ログイン中は登録APIをコール
        if (isLogin) {
            if ((data ?? []).length >= FAVORITE_KEYWORD_MAX) {
                toast.warn(`お気に入りワードは${FAVORITE_KEYWORD_MAX}つまで登録可能です。`);
                return;
            }
            createFavoriteWordMutation.mutate(keyword);
            return;
        }

        if (favoriteWordList.length >= FAVORITE_KEYWORD_MAX) {
            toast.warn(`お気に入りワードは${FAVORITE_KEYWORD_MAX}つまで登録可能です。`);
            return;
        }

        saveFavoriteKeyword(keyword);
        // ローカルストレージから検索ワードを取得
        const nowWordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];
        setFavoriteWordList(nowWordList.map((e) => {
            return { id: 0, word: e };
        }));

        toast.success(`お気に入りワードに登録しました。`);
    }

    return {
        favoriteWordList: isLogin ? data ?? [] : favoriteWordList,
        addFavoriteWord,
    }
}