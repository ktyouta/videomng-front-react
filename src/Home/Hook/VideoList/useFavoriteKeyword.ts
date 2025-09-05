import { FAVORITE_KEYWORD, FAVORITE_KEYWORD_MAX, REACENT_KEYWORD, REACENT_KEYWORD_MAX } from "../../Const/HomeConst";

export function useFavoriteKeyword() {

    function saveFavoriteKeyword(keyword: string,) {

        // ローカルストレージから検索ワード(お気に入りワード)を取得
        const nowWordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];

        // ローカルストレージに検索ワードを保存
        const newWordList = [keyword, ...nowWordList.filter((e) => e !== keyword.trim())];

        if (nowWordList.length >= FAVORITE_KEYWORD_MAX) {
            newWordList.length = FAVORITE_KEYWORD_MAX;
        }
        localStorage.setItem(FAVORITE_KEYWORD, JSON.stringify(newWordList));
    }

    return {
        saveFavoriteKeyword
    }
}