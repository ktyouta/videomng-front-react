import { toast } from "react-toastify";
import { ROUTER_PATH } from "../../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";

export function useFavoriteVideoFolderSearchArea() {

    // ルーティング用
    const { appNavigate } = useAppNavigation();

    /**
     * フォルダ名クリックイベント
     * @param folderId 
     */
    function clickFolderName(folderId: number) {

        if (!folderId) {
            toast.error(`フォルダを開けません。`);
            return;
        }

        appNavigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.FOLDER}/${folderId}`);
    }

    return {
        clickFolderName,
    }
}