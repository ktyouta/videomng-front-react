import { useAtomValue, useSetAtom } from "jotai";
import { FREQUENT_KEYWORD, REACENT_KEYWORD } from "../../Const/HomeConst";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom, showMoreDataAtom } from "../../Atom/HomeAtom";
import { VideoListApiUrlModel } from "../../Model/VideoListApiUrlModel";
import { useNavigate } from "react-router-dom";
import { SetVideoApiUrlContext } from "../../Component/Home";
import { useEffect, useState } from "react";
import { FrequentWordType } from "../../Type/VideoList/FrequentWordType";
import { useFrequentKeywords } from "./useFrequentKeywords";
import { useRecentKeyword } from "./useRecentKeyword";
import { useHomeVideoSearchConditionValue } from "./useHomeVideoSearchConditionValue";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";

export function useHomeFrequentKeywords() {

    // よく検索するワードリスト
    const [frequentWordList, setFrequentWordList] = useState<FrequentWordType[]>([]);
    // キーワード
    //const setKeyword = useSetAtom(keywordAtom);
    // // 動画一覧検索条件選択値(種別)
    // const selectedVideoType = useAtomValue(selectedVideoTypeAtom);
    // // 動画一覧検索条件選択値(カテゴリ)
    // const selectedVideoCategory = useAtomValue(selectedVideoCategoryAtom);
    // // 動画取得用URL
    // const setVideoApiUrl = SetVideoApiUrlContext.useCtx();
    // // 動画リスト追加読み込み用
    // const setShowMoreData = useSetAtom(showMoreDataAtom);
    // //ルーティング用
    // const navigate = useNavigate();
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

        // const videoListApiUrlModel = VideoListApiUrlModel.create({
        //     keyword,
        //     videoType: selectedVideoType,
        //     videoCategory: selectedVideoCategory,
        // });

        // setVideoApiUrl(videoListApiUrlModel.url);
        // setShowMoreData(undefined);
        // navigate(videoListApiUrlModel.query);

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