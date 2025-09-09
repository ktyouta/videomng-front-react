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

export function useHomeVideoDetail() {

    //ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画ID
    const videoId = useVideoId();
    // 一覧画面のクエリパラメータ
    const { query } = useCreateHomeVideoListQuery();


    // 動画詳細を取得
    const { data: videoDetail, isLoading } = useQueryWrapper<VideoDetailResponseType, VideoDetailItemType>(
        {
            url: useHomeVideoDetailEndpoint(videoId),
            select: (res: VideoDetailResponseType) => {
                return res.data.items;
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                if (errRes.response.data.message) {
                    setErrMessage(`${errRes.response.data.message}`);
                }
            }
        }
    );


    /**
     * ホーム画面に戻る
     */
    function backHome() {

        navigate(`${ROUTER_PATH.HOME.ROOT}${query}`);
    }

    return {
        isLoading,
        videoDetail,
        videoId,
        errMessage,
        backHome,
        //setVideoId,
    };
}