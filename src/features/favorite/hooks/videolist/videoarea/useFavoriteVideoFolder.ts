import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { toast } from "react-toastify";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { PREV_PATH_KEY } from "../../../../../consts/CommonConst";
import { useDraggable } from "@dnd-kit/core";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { useDroppable } from "@dnd-kit/core";
import { FolderType } from "../../../types/videolist/FolderType";
import { CSSProperties } from "react";


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
        backgroundColor: isOver ? `rgba(144, 202, 249, 0.2)` : undefined,
        border: isOver ? `1px solid rgb(144, 202, 249)` : undefined,
        transform: isOver ? `scale(1.05)` : undefined,
    };
    //ルーティング用
    const navigate = useNavigate();
    // クエリ作成用
    const { query } = useCreateFavoriteVideoListQuery();
    // パス
    const pathName = location.pathname;


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

        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.FOLDER}/${id}?${PREV_PATH_KEY}=${pathName}${query}`);
    }

    return {
        setNodeRef,
        draggingStyle,
        clickFolder
    }
}