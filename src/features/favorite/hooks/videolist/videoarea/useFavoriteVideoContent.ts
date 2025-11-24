import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { toast } from "react-toastify";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { PREV_PATH_KEY } from "../../../../../consts/CommonConst";
import { useDraggable } from "@dnd-kit/core";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { CSSProperties } from "react";


type propsType = {
    data: FavoriteVideoListMergedType,
}

export function useFavoriteVideoContent(props: propsType) {

    //ルーティング用
    const navigate = useNavigate();
    // クエリ作成用
    const { query } = useCreateFavoriteVideoListQuery();
    // ドラッグ用
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: props.data.videoId,
    });
    // ドラッグ時スタイル
    const draggingStyle: CSSProperties = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px) scale(0.7)` : undefined,
        opacity: isDragging ? 0.8 : 1,
    };

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            toast.error(`動画情報を取得できませんでした。`);
            return;
        }

        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${id}?${PREV_PATH_KEY}=${ROUTER_PATH.FAVORITE.ROOT}${query}`);
    }

    return {
        clickVideo,
        attributes,
        listeners,
        setNodeRef,
        transform,
        draggingStyle,
    }
}