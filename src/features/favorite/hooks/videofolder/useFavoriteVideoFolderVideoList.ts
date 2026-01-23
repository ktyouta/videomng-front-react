import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";

export function useFavoriteVideoFolderVideoList() {

    // ルーティング用
    const { appGoBack } = useAppNavigation();

    /**
     * 前画面に遷移
     */
    function back() {
        appGoBack(ROUTER_PATH.FAVORITE.ROOT);
    }

    return {
        back
    }
}
