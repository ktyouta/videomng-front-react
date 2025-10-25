import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { useChannelId } from "./useChannelId";
import { PREV_PATH_KEY } from "../../../Common/Const/CommonConst";


export function useHomeChannelVideoContent() {

    //ルーティング用
    const navigate = useNavigate();
    // パス
    const pathName = location.pathname;
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            toast.error(`動画情報を取得できませんでした。`);
            return;
        }

        navigate(`${ROUTER_PATH.HOME.ROOT}${ROUTER_PATH.HOME.DETAIL}/${id}?${PREV_PATH_KEY}=${pathName}${queryParam}`);
    }

    return {
        clickVideo,
    }
}