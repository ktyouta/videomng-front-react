import { useDroppable } from "@dnd-kit/core";
import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PREV_PATH_KEY } from "../../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { FolderType } from "../../../types/videolist/FolderType";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";


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