import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { selectedVideoCategoryAtom, selectedVideoTypeAtom, videoListDataAtom } from "../../Atom/HomeAtom";
import { useHomeVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import { VideoListApiUrlModel } from "../../Model/VideoListApiUrlModel";

export function useHomeVideoList() {

    // 動画取得用URL
    const [videoApiUrl, setVideoApiUrl] = useState(``);
    // 動画一覧検索条件選択値(種別)
    const setSelectedVideoType = useSetAtom(selectedVideoTypeAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const setSelectedVideoCategory = useSetAtom(selectedVideoCategoryAtom);
    // 動画検索条件
    const { setSelectedVideoKeyword } = useHomeVideoSearchConditionValue();

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
                setSelectedVideoKeyword(keyword);
                setSelectedVideoType(videoType);
                setSelectedVideoCategory(videoCategory);

                const videoListApiUrlModel = VideoListApiUrlModel.reConstruct(query);
                setVideoApiUrl(videoListApiUrlModel.url);
            }
        }

    }, []);
}