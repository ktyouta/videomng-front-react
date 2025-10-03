import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { VideoDetailResponseType } from "../../Type/VideoDetail/VideoDetailResponseType";
import { useNavigate, useParams } from "react-router-dom";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { useEffect, useState } from "react";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { VideoDetailItemType } from "../../Type/VideoDetail/VideoDetailItemType";
import { useHomeVideoDetailEndpoint } from "./useHomeVideoDetailEndpoint";
import { useVideoId } from "./useVideoId";
import { useCreateHomeVideoListQuery } from "../VideoList/useCreateHomeVideoListQuery";
import { useQueryParams } from "../../../Common/Hook/useQueryParams";
import { SEARCH_CONDITION } from "../../Const/HomeConst";

export function useHomeVideoDetail() {

    // ルーティング用
    const navigate = useNavigate();
    // 動画ID
    const videoId = useVideoId();
    // クエリパラメータ(遷移元)
    const previouspath = (() => {
        const { previouspath } = useQueryParams();
        return decodeURIComponent(previouspath);
    })();


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

        navigate(`${ROUTER_PATH.HOME.ROOT}${previouspath}`);
    }

    return {
        isLoading,
        videoDetail,
        videoId,
        backHome,
        isError
    };
}