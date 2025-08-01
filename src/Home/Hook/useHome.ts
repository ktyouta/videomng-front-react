import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { VideoListApiUrlModel } from "../Model/VideoListApiUrlModel";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom } from "../Atom/HomeAtom";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";

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
    // ページ読み込み完了フラグ
    const [isLoadingComp, setIsLoadingComp] = useState(false);
    // チャンネルID
    const [channelId, setChannelId] = useState(``);


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
        else if (pathArray.length == 4 && `/${pathArray[2]}` === `${ROUTER_PATH.HOME.DETAIL}`) {

            // ID部分を取得
            const videoId = pathArray[3];
            setVideoId(videoId);
        }
        // チャンネル動画一覧
        else if (pathArray.length == 4 && `/${pathArray[2]}` === `${ROUTER_PATH.HOME.CHANNEL}`) {

            // ID部分を取得
            const channelId = pathArray[3];
            setChannelId(channelId);
        }

        setIsLoadingComp(true);
    }, []);

    return {
        videoId,
        setVideoId,
        videoApiUrl,
        setVideoApiUrl,
        isLoadingComp,
        channelId,
        setChannelId,
    }
}