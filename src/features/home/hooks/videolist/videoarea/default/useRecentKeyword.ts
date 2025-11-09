import { REACENT_KEYWORD, REACENT_KEYWORD_MAX } from "../../../../const/HomeConst";

export function useRecentKeyword() {

    function saveRecentKeyword(keyword: string,) {

        // ローカルストレージから検索ワード(最近の検索)を取得
        const nowWordList = JSON.parse(localStorage.getItem(REACENT_KEYWORD) || "[]") as string[];

        // ローカルストレージに検索ワードを保存
        const newWordList = [keyword, ...nowWordList.filter((e) => e !== keyword.trim())];

        if (nowWordList.length >= REACENT_KEYWORD_MAX) {
            newWordList.length = REACENT_KEYWORD_MAX;
        }
        localStorage.setItem(REACENT_KEYWORD, JSON.stringify(newWordList));
    }

    return {
        saveRecentKeyword
    }
}