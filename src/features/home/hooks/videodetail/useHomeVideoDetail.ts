import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import useQueryWrapper from "../../../../hooks/useQueryWrapper";
import { VideoDetailItemType } from "../../../../types/videodetail/VideoDetailItemType";
import { VideoDetailResponseType } from "../../../../types/videodetail/VideoDetailResponseType";
import { useHomeVideoDetailEndpoint } from "./useHomeVideoDetailEndpoint";
import { useVideoId } from "./useVideoId";

export function useHomeVideoDetail() {

    // 動画ID
    const videoId = useVideoId();
    // ルーティング用
    const { appGoBack } = useAppNavigation();


    // 動画詳細を取得
    const { data: videoDetail, isLoading, isError } = useQueryWrapper<VideoDetailResponseType, VideoDetailItemType>(
        {
            url: useHomeVideoDetailEndpoint(videoId),
            select: (res: VideoDetailResponseType) => {
                return res.data.items;
            },
            afErrorFn: (res) => {
            }
        }
    );

    /**
     * 前画面に戻る
     */
    function backScreen() {
        appGoBack(ROUTER_PATH.HOME.ROOT);
    }

    return {
        isLoading,
        videoDetail,
        videoId,
        backScreen,
        isError
    };
}