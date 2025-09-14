import { useAtomValue, useSetAtom } from "jotai";
import { FAVORITE_KEYWORD } from "../../../../Const/HomeConst";
import { useEffect, useState } from "react";
import { useFrequentKeywords } from "./useFrequentKeywords";
import { useRecentKeyword } from "./useRecentKeyword";
import { useHomeVideoSearchConditionValue } from "../../useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../../../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";
import { useNavigate } from "react-router-dom";

export function useHomeFavoriteKeywords() {

    // お気に入りワードリスト
    const [favoriteWordList, setFavoriteWordList] = useState<string[]>([]);
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
    //ルーティング用
    const navigate = useNavigate();


    useEffect(() => {

        const wordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];

        setFavoriteWordList(wordList);
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
            navigate(newQuery);

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
        const nowWordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];

        // ローカルストレージに検索ワードを保存
        const newWordList = [...nowWordList.filter((e) => e !== keyword.trim())];
        localStorage.setItem(FAVORITE_KEYWORD, JSON.stringify(newWordList));

        setFavoriteWordList(newWordList);
    }

    return {
        favoriteWordList,
        clickKeyWord,
        deleteKeyWord,
    }
}