import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SetChannelIdContext, SetVideoIdContext } from "../Component/Home";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";


export function useHomeVideoContent() {

    //ルーティング用
    const navigate = useNavigate();
    // 動画ID(setter)
    const setVideoId = SetVideoIdContext.useCtx();
    // チャンネルID(setter)
    const setChannelId = SetChannelIdContext.useCtx();

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            toast.error(`動画情報を取得できませんでした。`);
            return;
        }

        setVideoId(id);
        navigate(`${ROUTER_PATH.HOME.ROOT}${ROUTER_PATH.HOME.DETAIL}/${id}`);
    }

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickChannel(id: string) {

        if (!id) {
            toast.error(`チャンネル情報を取得できませんでした。`);
            return;
        }

        setChannelId(id);
        navigate(`${ROUTER_PATH.HOME.ROOT}${ROUTER_PATH.HOME.CHANNEL}/${id}`);
    }

    return {
        clickVideo,
        clickChannel
    }
}