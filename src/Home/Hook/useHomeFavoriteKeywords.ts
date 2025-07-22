import { useAtomValue, useSetAtom } from "jotai";
import { FAVORITE_KEYWORD } from "../Const/HomeConst";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom, showMoreDataAtom } from "../Atom/HomeAtom";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { useNavigate } from "react-router-dom";
import { SetVideoApiUrlContext } from "../Component/Home";
import { useEffect, useState } from "react";
import { useFrequentKeywords } from "./useFrequentKeywords";
import { useRecentKeywod } from "./useRecentKeywod";

export function useHomeFavoriteKeywords() {

    // お気に入りワードリスト
    const [favoriteWordList, setFavoriteWordList] = useState<string[]>([]);
    // キーワード
    const setKeyword = useSetAtom(keywordAtom);
    // 動画一覧検索条件選択値(種別)
    const selectedVideoType = useAtomValue(selectedVideoTypeAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const selectedVideoCategory = useAtomValue(selectedVideoCategoryAtom);
    // 動画取得用URL
    const setVideoApiUrl = SetVideoApiUrlContext.useCtx();
    // 動画リスト追加読み込み用
    const setShowMoreData = useSetAtom(showMoreDataAtom);
    //ルーティング用
    const navigate = useNavigate();
    // 最近の検索ワード保存用
    const { saveRecentKeywod } = useRecentKeywod();
    // あなたがよく検索するワード保存用
    const { saveFrequentKeyword } = useFrequentKeywords();


    useEffect(() => {

        const wordList = JSON.parse(localStorage.getItem(FAVORITE_KEYWORD) || "[]") as string[];

        setFavoriteWordList(wordList);
    }, []);

    /**
     * キーワードクリックイベント
     */
    function clickKeyWord(keyword: string,) {

        setKeyword(keyword);

        const videoListApiUrlModel = VideoListApiUrlModel.create({
            keyword,
            videoType: selectedVideoType,
            videoCategory: selectedVideoCategory,
        });

        setVideoApiUrl(videoListApiUrlModel.url);
        setShowMoreData(undefined);
        navigate(videoListApiUrlModel.query);

        // ローカルストレージの検索ワード(最近の検索)を保存
        saveRecentKeywod(keyword);

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