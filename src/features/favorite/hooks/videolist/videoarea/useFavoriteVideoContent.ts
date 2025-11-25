import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { toast } from "react-toastify";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { PREV_PATH_KEY } from "../../../../../consts/CommonConst";
import { useDraggable } from "@dnd-kit/core";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { CSSProperties, useRef } from "react";


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
        transform: transform ? `translate(${transform.x}px, ${transform.y}px) scale(0.99)` : undefined,
        opacity: isDragging ? 0.8 : 1,
    };
    // 動画コンテンツの位置
    const dragStartX = useRef(0);
    const dragStartY = useRef(0);

    /**
     * ドラッグ開始位置を記録
     * @param e 
     */
    function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
        dragStartX.current = e.clientX;
        dragStartY.current = e.clientY;
    };

    /**
     * ドラッグ終了／クリック処理
     * @param id 
     * @param e 
     */
    function handleMouseUp(id: string, e: React.MouseEvent<HTMLDivElement>) {

        const diffX = Math.abs(e.clientX - dragStartX.current);
        const diffY = Math.abs(e.clientY - dragStartY.current);

        if (diffX < 3 && diffY < 3) {
            navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${id}?${PREV_PATH_KEY}=${ROUTER_PATH.FAVORITE.ROOT}${query}`);
        }
    };


    return {
        attributes,
        listeners,
        setNodeRef,
        transform,
        draggingStyle,
        handleMouseDown,
        handleMouseUp,
    }
}