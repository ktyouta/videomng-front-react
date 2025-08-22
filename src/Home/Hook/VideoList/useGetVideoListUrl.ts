import { useAtomValue } from "jotai";
import { showMoreDataAtom } from "../../Atom/HomeAtom";
import { VideoListApiUrlModel } from "../../Model/VideoListApiUrlModel";

export function useGetVideoListUrl() {

    // 動画リスト追加読み込み用
    const showMoreData = useAtomValue(showMoreDataAtom);

    function query() {
        const keyword = showMoreData?.keyword ?? ``;
        const videoType = showMoreData?.videoType ?? ``;
        const videoCategory = showMoreData?.videoCategory ?? ``;

        const videoListApiUrlModel = VideoListApiUrlModel.create({
            keyword,
            videoType,
            videoCategory,
        });

        return videoListApiUrlModel.query;
    }

    return {
        query
    };
}