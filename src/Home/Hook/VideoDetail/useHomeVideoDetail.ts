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

export function useHomeVideoDetail() {

    // お気に入り動画ID
    const videoId = VideoIdContext.useCtx();
    // 動画詳細
    const [videoDetail, setVideoDetail] = useState<VideoDetailItemType>();
    //ルーティング用
    const navigate = useNavigate();
    // エラーメッセージ
    const [errMessage, setErrMessage] = useState(``);
    // 動画一覧取得URL情報
    const { query } = useGetVideoListUrl();

    useEffect(() => {

        // アンマウント時に動画情報をリセット
        return () => {
            setVideoDetail(undefined);
        }
    }, []);

    // 動画詳細を取得
    const { isLoading } = useQueryWrapper<VideoDetailResponseType>(
        {
            url: videoId ? `${new VideoDetailApiUrlModel(videoId).videoMngApiPath}` : ``,
            afSuccessFn: (response: VideoDetailResponseType) => {
                const items = response.data.items;

                if (items.length === 0) {
                    setErrMessage(`動画情報を取得できませんでした。`);
                    return;
                }

                setVideoDetail(items[0]);
            },
            afErrorFn: (res) => {
                const errRes = res as errResType;
                if (errRes.response.data.message) {
                    toast.error(`${errRes.response.data.message}`);
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