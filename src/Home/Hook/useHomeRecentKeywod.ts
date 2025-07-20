import { useAtomValue, useSetAtom } from "jotai";
import { REACENT_KEYWORD } from "../Const/HomeConst";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom, showMoreDataAtom } from "../Atom/HomeAtom";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { useNavigate } from "react-router-dom";
import { SetVideoApiUrlContext } from "../Component/Home";
import { useEffect, useState } from "react";

export function useHomeRecentKeywod() {

    // 最近の検索リスト
    const [recentWordList, setRecentWordList] = useState<string[]>([]);
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


    useEffect(() => {

        const wordList = JSON.parse(localStorage.getItem(REACENT_KEYWORD) || "[]") as string[];

        setRecentWordList(wordList);
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