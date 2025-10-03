import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ROUTER_PATH } from "../../../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";


export function useHomeVideoContent() {

    //ルーティング用
    const navigate = useNavigate();
    // クエリ作成用
    const { query } = useCreateHomeVideoListQuery();

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            toast.error(`動画情報を取得できませんでした。`);
            return;
        }

        let prevQuery = ``;

        if (query) {
            prevQuery = `?previouspath=${encodeURIComponent(query)}`;
        }

        navigate(`${ROUTER_PATH.HOME.ROOT}${ROUTER_PATH.HOME.DETAIL}/${id}${prevQuery}`);
    }

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickChannel(id: string) {

        if (!id) {
            toast.error(`チャンネル情報を取得できませんでした。`);
            return;
        }

        let prevQuery = ``;

        if (query) {
            prevQuery = `?previouspath=${encodeURIComponent(query)}`;
        }

        navigate(`${ROUTER_PATH.HOME.ROOT}${ROUTER_PATH.HOME.CHANNEL}/${id}${prevQuery}`);
    }

    return {
        clickVideo,
        clickChannel
    }
}