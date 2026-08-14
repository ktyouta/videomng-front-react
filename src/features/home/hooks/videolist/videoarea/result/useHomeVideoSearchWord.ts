import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../../../app/components/QueryApp";
import { VIDEO_MNG_PATH } from "../../../../../../consts/CommonConst";
import ENV from "../../../../../../env.json";
import useMutationWrapper from "../../../../../../hooks/useMutationWrapper";
import { errResType } from "../../../../../../hooks/useMutationWrapperBase";
import { getFavoriteSearchKeyWord } from "../../../../api/getFavoriteSearchKeyWord";
import { videoKeys } from "../../../../api/queryKey";
import { FAVORITE_KEYWORD } from "../../../../const/HomeConst";
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
    const createKeyWordMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_SEARCH_WORD}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: () => {
            toast.success(`お気に入りワードに登録しました。`);
            // お気に入りワードを再取得
            queryClient.invalidateQueries(videoKeys.favoriteSearchKeyWordLists());
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            const message = res.response.data.message;
            if (message) {
                toast.error(message);
            }
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
            createKeyWordMutation.mutate({ word: keyword });
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