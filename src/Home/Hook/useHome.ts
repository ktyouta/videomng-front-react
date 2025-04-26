import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom } from "../Atom/HomeAtom";

export function useHome() {

    // 動画ID
    const [videoId, setVideoId] = useState(``);
    // 動画取得用URL
    const [videoApiUrl, setVideoApiUrl] = useState(``);
    // 動画一覧検索条件選択値(種別)
    const setSelectedVideoType = useSetAtom(selectedVideoTypeAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const setSelectedVideoCategory = useSetAtom(selectedVideoCategoryAtom);
    // 検索キーワード
    const setKeyword = useSetAtom(keywordAtom);


    // URL直打ち対応
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length < 2) {
            return;
        }

        const query = window.location.search;

        // 動画一覧
        if (pathArray.length == 2) {

            // クエリパラメータが設定されている場合
            if (query && query.length > 0 && query.charAt(0) === `?`) {

                const params = new URLSearchParams(query);
                const keywordValue = params.get(`q`);
                const videoCategoryValue = params.get(`videocategory`);
                const videoTypeValue = params.get(`videotype`);

                const keyword = keywordValue !== null ? keywordValue : ``;
                const videoCategory = videoCategoryValue !== null ? videoCategoryValue : ``;
                const videoType = videoTypeValue !== null ? videoTypeValue : ``;

                // 検索条件の初期値設定
                setKeyword(keyword);
                setSelectedVideoType(videoType);
                setSelectedVideoCategory(videoCategory);

                const videoListApiUrlModel = VideoListApiUrlModel.reConstruct(query);
                setVideoApiUrl(videoListApiUrlModel.url);
            }
        }
        // 動画詳細
        else if (pathArray.length == 3) {

            // ID部分を取得
            const videoId = pathArray[2];
            setVideoId(videoId);
        }
    }, []);

    return {
        videoId,
        setVideoId,
        videoApiUrl,
        setVideoApiUrl,
    }
}