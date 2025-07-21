import { FREQUENT_KEYWORD, FREQUENT_KEYWORD_MAX_SAVE_LIMIT } from "../Const/HomeConst";
import { FrequentWordType } from "../Type/FrequentWordType";

export function useFrequentKeywords() {

    function saveFrequentKeyword(keyword: string) {

        // ローカルストレージから検索ワード(あなたがよく検索するワード)を取得
        const nowFrequentWordList = JSON.parse(localStorage.getItem(FREQUENT_KEYWORD) || "[]") as FrequentWordType[];

        const matchFrequentWord = nowFrequentWordList.find((e) => {
            return e.keyword === keyword.trim();
        });

        let newFrequentWordList;

        // ローカルストレージに検索ワードを保存
        if (matchFrequentWord) {
            matchFrequentWord.count += 1;
            newFrequentWordList = nowFrequentWordList;
        }
        else {

            const sortedNowFrequentWordList = nowFrequentWordList.sort((a, b) => {
                return b.count - a.count;
            });

            if (sortedNowFrequentWordList.length >= FREQUENT_KEYWORD_MAX_SAVE_LIMIT) {
                sortedNowFrequentWordList.length = FREQUENT_KEYWORD_MAX_SAVE_LIMIT - 1;
            }

            newFrequentWordList = [...sortedNowFrequentWordList, { keyword: keyword, count: 1 },];
        }
        localStorage.setItem(FREQUENT_KEYWORD, JSON.stringify(newFrequentWordList));
    }

    return {
        saveFrequentKeyword
    }
}