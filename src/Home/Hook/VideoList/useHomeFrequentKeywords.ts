import { useAtomValue, useSetAtom } from "jotai";
import { FREQUENT_KEYWORD, REACENT_KEYWORD } from "../../Const/HomeConst";
import { useEffect, useState } from "react";
import { FrequentWordType } from "../../Type/VideoList/FrequentWordType";
import { useFrequentKeywords } from "./useFrequentKeywords";
import { useRecentKeyword } from "./useRecentKeyword";
import { useHomeVideoSearchConditionValue } from "./useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";

export function useHomeFrequentKeywords() {

    // よく検索するワードリスト
    const [frequentWordList, setFrequentWordList] = useState<FrequentWordType[]>([]);
    // 最近の検索ワード保存用
    const { saveRecentKeyword } = useRecentKeyword();
    // あなたがよく検索するワード保存用
    const { saveFrequentKeyword } = useFrequentKeywords();
    // 動画検索条件
    const { setInputKeyword } = useHomeVideoSearchConditionValue();
    // 現在の検索条件
    const { setNowSearchCondition } = useHomeVideoNowSearchConditionValue();


    useEffect(() => {

        // キーワードリストを取得
        const wordList = JSON.parse(localStorage.getItem(FREQUENT_KEYWORD) || "[]") as FrequentWordType[];

        // 検索回数でソート
        const sortedWordList = wordList.sort((a, b) => {
            return b.count - a.count;
        });

        setFrequentWordList(sortedWordList);
    }, []);

    /**
     * キーワードクリックイベント
     */
    function clickKeyWord(keyword: string,) {

        setInputKeyword(keyword);

        // 現在の検索条件を更新
        setNowSearchCondition((e) => {

            return {
                ...e,
                keyword
            }
        });

        // ローカルストレージの検索ワード(最近の検索)を保存
        saveRecentKeyword(keyword);

        // ローカルストレージの検索ワード(あなたがよく検索するワード)を保存
        saveFrequentKeyword(keyword);

    }

    /**
     * キーワード削除イベント
     */
    function deleteKeyWord(keyword: string,) {

        // ローカルストレージから検索ワードを取得
        const nowWordList = JSON.parse(localStorage.getItem(FREQUENT_KEYWORD) || "[]") as FrequentWordType[];

        // ローカルストレージに検索ワードを保存
        const newWordList = [...nowWordList.filter((e: FrequentWordType) => e.keyword !== keyword.trim())];
        localStorage.setItem(FREQUENT_KEYWORD, JSON.stringify(newWordList));

        setFrequentWordList(newWordList);
    }

    return {
        frequentWordList,
        clickKeyWord,
        deleteKeyWord,
    }
}