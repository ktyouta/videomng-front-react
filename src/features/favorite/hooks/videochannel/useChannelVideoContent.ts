import { toast } from "react-toastify";
import { FLG } from "../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";


export function useChannelVideoContent() {

    // ルーティング用
    const { appNavigate } = useAppNavigation();

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(videoId: string, favoriteFlg: string) {

        if (!videoId) {
            toast.error(`動画情報を取得できませんでした。`);
            return;
        }

        // お気に入り登録済み
        if (favoriteFlg === FLG.ON) {
            appNavigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${videoId}`);
        }
        else {
            appNavigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL_NON_FAVORITE}/${videoId}`);
        }
    }

    return {
        clickVideo,
    }
}
