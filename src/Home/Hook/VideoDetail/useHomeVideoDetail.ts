import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { VideoDetailResponseType } from "../../Type/VideoDetail/VideoDetailResponseType";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { useEffect, useRef, useState } from "react";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { VideoDetailItemType } from "../../Type/VideoDetail/VideoDetailItemType";
import { useHomeVideoDetailEndpoint } from "./useHomeVideoDetailEndpoint";
import { useVideoId } from "./useVideoId";
import { useCreateHomeVideoListQuery } from "../VideoList/useCreateHomeVideoListQuery";
import { useQueryParams } from "../../../Common/Hook/useQueryParams";
import { HOME_PREV_PATH_KEY, LIST_SEARCH_CONDITION_KEY } from "../../Const/HomeConst";
import { getPrevPath } from "../../../Common/Function/CommonFunction";

export function useHomeVideoDetail() {

    // ルーティング用
    const navigate = useNavigate();
    // 動画ID
    const videoId = useVideoId();


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

        // 前画面のパスを取得
        const prev = getPrevPath(HOME_PREV_PATH_KEY, ROUTER_PATH.HOME.ROOT);
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