import { useNavigate } from "react-router-dom";
import { PREV_PATH_KEY } from "../../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import useQueryWrapper from "../../../../../hooks/useQueryWrapper";
import { getPrevPath } from "../../../../../utils/CommonFunction";
import { VideoDetailItemType } from "../../../types/videochannel/videodetail/VideoDetailItemType";
import { VideoDetailResponseType } from "../../../types/videochannel/videodetail/VideoDetailResponseType";
import { useVideoDetailEndpoint } from "./useVideoDetailEndpoint";
import { useVideoId } from "./useVideoId";

export function useVideoDetail() {

    // ルーティング用
    const navigate = useNavigate();
    // 動画ID
    const videoId = useVideoId();
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.FAVORITE.ROOT);


    // 動画詳細を取得
    const { data: videoDetail, isLoading, isError } = useQueryWrapper<VideoDetailResponseType, VideoDetailItemType>(
        {
            url: useVideoDetailEndpoint(videoId),
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
        navigate(prev);
    }

    return {
        isLoading,
        videoDetail,
        videoId,
        backScreen,
        isError
    };
}