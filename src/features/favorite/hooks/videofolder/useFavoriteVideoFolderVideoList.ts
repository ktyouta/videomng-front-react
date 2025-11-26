import { useLocation, useNavigate } from "react-router-dom";
import { useViewStatusList } from "../useViewStatusList";
import { useEffect, useRef } from "react";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { PREV_PATH_KEY } from "../../../../consts/CommonConst";
import { getPrevPath } from "../../../../utils/CommonFunction";

export function useFavoriteVideoFolderVideoList() {

    // 前画面のパスを取得
    const prev = getPrevPath(PREV_PATH_KEY, ROUTER_PATH.FAVORITE.ROOT);
    //ルーティング用
    const navigate = useNavigate();

    /**
     * 前画面に遷移
     */
    function back() {
        navigate(prev);
    }

    return {
        back
    }
}