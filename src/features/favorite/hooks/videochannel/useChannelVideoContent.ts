import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FLG, PREV_PATH_KEY } from "../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";


export function useChannelVideoContent() {

    //ルーティング用
    const navigate = useNavigate();
    // パス
    const pathName = location.pathname;
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;

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
            navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${videoId}?${PREV_PATH_KEY}=${pathName}${queryParam}`);
        }
        else {
            navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL_NON_FAVORITE}/${videoId}?${PREV_PATH_KEY}=${pathName}${queryParam}`);
        }
    }

    return {
        clickVideo,
    }
}