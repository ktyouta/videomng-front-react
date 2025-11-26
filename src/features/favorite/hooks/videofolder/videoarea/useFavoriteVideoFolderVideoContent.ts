import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { toast } from "react-toastify";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { PREV_PATH_KEY } from "../../../../../consts/CommonConst";
import { useDraggable } from "@dnd-kit/core";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { CSSProperties, useRef } from "react";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";


export function useFavoriteVideoFolderVideoContent() {

    //ルーティング用
    const navigate = useNavigate();
    // クエリ作成用
    const { query } = useCreateFavoriteVideoFolderVideoListQuery();

    /**
     * 動画クリック処理
     * @param id 
     */
    function clickVideo(id: string) {
        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${id}?${PREV_PATH_KEY}=${ROUTER_PATH.FAVORITE.ROOT}${query}`);
    };


    return {
        clickVideo,
    }
}