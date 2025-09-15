import { useAtomValue, useSetAtom } from "jotai";
import { REACENT_KEYWORD } from "../../../../Const/HomeConst";
import { useEffect, useState } from "react";
import { useFrequentKeywords } from "./useFrequentKeywords";
import { useRecentKeyword } from "./useRecentKeyword";
import { useHomeVideoSearchConditionValue } from "../../useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";
import { useNavigate } from "react-router-dom";
import { useReplaceQuery } from "../../../../../Common/Hook/useReplaceQuery";

export function useHomeRecentKeywords() {

    // 最近の検索リスト
    const [recentWordList, setRecentWordList] = useState<string[]>([]);
    // 最近の検索ワード保存用
    const { saveRecentKeyword } = useRecentKeyword();
    // あなたがよく検索するワード保存用
    const { saveFrequentKeyword } = useFrequentKeywords();
    // 動画検索条件
    const { setInputKeyword } = useHomeVideoSearchConditionValue();
    // 現在の検索条件
    const { setNowSearchCondition } = useHomeVideoNowSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateHomeVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();


    // ローカルストレージから最近の検索リストを取得
    useEffect(() => {

        const wordList = JSON.parse(localStorage.getItem(REACENT_KEYWORD) || "[]") as string[];

        setRecentWordList(wordList);
    }, []);

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
            }

            const newQuery = create(newCondition);

            // クエリパラメータを更新
            replace(newQuery);

            return newCondition;
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
        const nowWordList = JSON.parse(localStorage.getItem(REACENT_KEYWORD) || "[]") as string[];

        // ローカルストレージに検索ワードを保存
        const newWordList = [...nowWordList.filter((e) => e !== keyword.trim())];
        localStorage.setItem(REACENT_KEYWORD, JSON.stringify(newWordList));

        setRecentWordList(newWordList);
    }

    return {
        recentWordList,
        clickKeyWord,
        deleteKeyWord,
    }
}