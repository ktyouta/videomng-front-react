import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";

export function useHome() {

    // 動画ID
    const [videoId, setVideoId] = useState(``);
    // 動画取得用URL
    const [videoApiUrl, setVideoApiUrl] = useState(``);

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

                const videoListApiUrlModel = VideoListApiUrlModel.reConstruct(query);
                setVideoApiUrl(videoListApiUrlModel.url);
            }
        }
        // 動画詳細
        else if (pathArray.length == 3) {
            //ID部分を取得
            const videoId = pathArray[2];

        }
    }, []);

    return {
        videoId,
        setVideoId,
        videoApiUrl,
        setVideoApiUrl,
    }
}