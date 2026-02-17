import { useDraggable } from "@dnd-kit/core";
import { CSSProperties } from "react";
import { toast } from "react-toastify";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import { FavoriteVideoListMergedType } from "../../../types/FavoriteVideoListMergedType";


type propsType = {
    data: FavoriteVideoListMergedType,
}

export function useFavoriteVideoContent(props: propsType) {

    // ルーティング用
    const { appNavigate } = useAppNavigation();
    // ドラッグ用
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: props.data.videoId,
    });
    // ドラッグ時スタイル
    const draggingStyle: CSSProperties = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px) scale(0.99)` : undefined,
        opacity: isDragging ? 0.8 : 1,
    };

    /**
     * 動画クリック
     * @param id
     */
    const clickVideo = (id: string) => {
        appNavigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${id}`);
    };

    /**
     * チャンネル名のクリックイベント
     */
    function clickChannel(id: string) {

        if (!id) {
            toast.error(`チャンネル情報を取得できませんでした。`);
            return;
        }

        appNavigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.CHANNEL}/${id}`);
    }

    return {
        attributes,
        listeners,
        setNodeRef,
        draggingStyle,
        clickVideo,
        clickChannel,
    }
}