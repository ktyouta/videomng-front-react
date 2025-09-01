import { useAtom, useAtomValue } from "jotai";
import useQueryWrapper from "../../../Common/Hook/useQueryWrapper";
import { VideoDetailResponseType } from "../../Type/VideoDetail/VideoDetailResponseType";
import { VideoDetailApiUrlModel } from "../../Model/VideoDetailApiUrlModel";
import { useNavigate } from "react-router-dom";
import { errResType } from "../../../Common/Hook/useMutationWrapperBase";
import { VideoIdContext } from "../../Component/Home";
import { useEffect, useState } from "react";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { useGetVideoListUrl } from "../VideoList/useGetVideoListUrl";
import { VideoDetailItemType } from "../../Type/VideoDetail/VideoDetailItemType";
import { useHomeVideoDetailEndpoint } from "./useHomeVideoDetailEndpoint";

export function useHomeVideoDetail() {

    // お気に入り動画ID
    const videoId = VideoIdContext.useCtx();
    //ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画一覧取得URL情報
    const { query } = useGetVideoListUrl();

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

        navigate(`${ROUTER_PATH.HOME.ROOT}${query()}`);
    }

    return {
        isLoading,
        videoDetail,
        videoId,
        errMessage,
        backHome,
    };
}