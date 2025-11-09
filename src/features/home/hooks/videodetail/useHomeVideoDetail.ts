import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../../hooks/useQueryWrapper";
import { VideoDetailResponseType } from "../../types/videodetail/VideoDetailResponseType";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { errResType } from "../../../../hooks/useMutationWrapperBase";
import { useEffect, useRef, useState } from "react";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { toast } from "react-toastify";
import { VideoDetailItemType } from "../../types/videodetail/VideoDetailItemType";
import { useHomeVideoDetailEndpoint } from "./useHomeVideoDetailEndpoint";
import { useVideoId } from "./useVideoId";
import { useCreateHomeVideoListQuery } from "../videolist/useCreateHomeVideoListQuery";
import { useQueryParams } from "../../../../hooks/useQueryParams";
import { getPrevPath } from "../../../../utils/CommonFunction";
import { PREV_PATH_KEY } from "../../../../consts/CommonConst";

export function useHomeVideoDetail() {

    // ルーティング用
    const navigate = useNavigate();
    // 動画ID
    const videoId = useVideoId();
    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.HOME.ROOT);


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