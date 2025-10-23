import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ROUTER_PATH } from "../../../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { useCreateHomeVideoListQuery } from "../../useCreateHomeVideoListQuery";
import { HOME_PREV_PATH_KEY, LIST_SEARCH_CONDITION_KEY } from "../../../../Const/HomeConst";


export function useHomeVideoContent() {

    //ルーティング用
    const navigate = useNavigate();
    // クエリ作成用
    const { query } = useCreateHomeVideoListQuery();
    // パス
    const pathName = location.pathname;

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            toast.error(`動画情報を取得できませんでした。`);
            return;
        }

        navigate(`${ROUTER_PATH.HOME.ROOT}${ROUTER_PATH.HOME.DETAIL}/${id}?${HOME_PREV_PATH_KEY}=${pathName}${query}`);
    }

    /**
     * チャンネル名のクリックイベント
     */
    function clickChannel(id: string) {

        if (!id) {
            toast.error(`チャンネル情報を取得できませんでした。`);
            return;
        }

        navigate(`${ROUTER_PATH.HOME.ROOT}${ROUTER_PATH.HOME.CHANNEL}/${id}?${HOME_PREV_PATH_KEY}=${pathName}${query}`);
    }

    return {
        clickVideo,
        clickChannel
    }
}