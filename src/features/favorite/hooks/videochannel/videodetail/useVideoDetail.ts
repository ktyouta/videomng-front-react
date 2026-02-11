import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import { getVideoDetail } from "../../../../api/getVideoDetail";
import { VideoDetailResponseType } from "../../../types/videochannel/videodetail/VideoDetailResponseType";
import { useVideoId } from "./useVideoId";

export function useVideoDetail() {

    // ルーティング用
    const { appGoBack } = useAppNavigation();
    // 動画ID
    const videoId = useVideoId();


    // 動画詳細を取得
    const { data: videoDetail, isLoading, isError } = getVideoDetail({
        videoId,
        select: (res: VideoDetailResponseType) => {
            return res.data.items;
        }
    });

    /**
     * 前画面に戻る
     */
    function backScreen() {
        appGoBack(ROUTER_PATH.FAVORITE.ROOT);
    }

    return {
        isLoading,
        videoDetail,
        videoId,
        backScreen,
        isError
    };
}