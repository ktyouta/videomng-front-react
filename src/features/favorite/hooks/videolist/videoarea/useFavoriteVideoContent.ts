import { useDraggable } from "@dnd-kit/core";
import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PREV_PATH_KEY } from "../../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";


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
    // パス
    const pathName = location.pathname;

    /**
     * 動画クリック
     * @param id 
     */
    const clickVideo = (id: string) => {
        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${id}?${PREV_PATH_KEY}=${ROUTER_PATH.FAVORITE.ROOT}${query}`);
    };

    /**
     * チャンネル名のクリックイベント
     */
    function clickChannel(id: string) {

        if (!id) {
            toast.error(`チャンネル情報を取得できませんでした。`);
            return;
        }

        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.CHANNEL}/${id}?${PREV_PATH_KEY}=${pathName}${query}`);
    }

    return {
        attributes,
        listeners,
        setNodeRef,
        transform,
        draggingStyle,
        clickVideo,
        clickChannel,
    }
}