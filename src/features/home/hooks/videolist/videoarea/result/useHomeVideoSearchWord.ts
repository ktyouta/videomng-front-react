import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useFavoriteKeyword } from "../default/useFavoriteKeyword";
import { FAVORITE_KEYWORD } from "../../../../const/HomeConst";


export function useHomeVideoSearchWord() {

    // お気に入りワードリスト
    const [favoriteWordList, setFavoriteWordList] = useState<string[]>([]);
    // お気に入りワード保存用
    const { saveFavoriteKeyword } = useFavoriteKeyword();


    // ローカルストレージからお気に入りワードリストを取得
    useEffect(() => {

        const wordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];

        setFavoriteWordList(wordList);
    }, []);

    /**
     * お気に入りワード追加
     * @param keyword 
     */
    function addFavoriteWord(keyword: string) {

        saveFavoriteKeyword(keyword);

        // ローカルストレージから検索ワードを取得
        const nowWordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];
        setFavoriteWordList(nowWordList);

        toast.success(`お気に入りワードに登録しました。`);
    }

    return {
        favoriteWordList,
        addFavoriteWord,
    }
}