import { useDroppable } from "@dnd-kit/core";
import { CSSProperties } from "react";
import { toast } from "react-toastify";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import { FolderType } from "../../../types/videolist/FolderType";


type propsType = {
    data: FolderType,
}

export function useFavoriteVideoFolder(props: propsType) {

    // ドラッグ用
    const { setNodeRef, isOver } = useDroppable({
        id: props.data.folderId,
    });
    // ドラッグ時スタイル
    const draggingStyle: CSSProperties = {
        backgroundColor: isOver ? `rgba(0, 168, 255, 0.15)` : undefined,
        border: isOver ? `1px solid rgba(0, 168, 255, 0.9)` : undefined,
        transform: isOver ? `scale(1.07)` : undefined,
    };
    // ルーティング用
    const { appNavigate } = useAppNavigation();


    /**
     * フォルダ名のクリックイベント
     * @param id
     * @returns
     */
    function clickFolder(id: number) {

        if (!id) {
            toast.error(`フォルダを開けません。`);
            return;
        }

        appNavigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.FOLDER}/${id}`);
    }

    return {
        setNodeRef,
        draggingStyle,
        clickFolder
    }
}