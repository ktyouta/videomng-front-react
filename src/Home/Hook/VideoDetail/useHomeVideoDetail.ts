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
import { LIST_SEARCH_CONDITION_KEY } from "../../Const/HomeConst";

export function useHomeVideoDetail() {

    // ルーティング用
    const navigate = useNavigate();
    // 動画ID
    const videoId = useVideoId();
    // URL情報
    const location = useLocation();
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;


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
     * ホーム画面に戻る
     */
    function backHome() {

        navigate(`${ROUTER_PATH.HOME.ROOT}${queryParam}`);
    }

    return {
        isLoading,
        videoDetail,
        videoId,
        backHome,
        isError
    };
}