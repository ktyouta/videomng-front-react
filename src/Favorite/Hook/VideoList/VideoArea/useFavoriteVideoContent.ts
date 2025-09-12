import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../Common/Const/RouterPath";
import { toast } from "react-toastify";


export function useFavoriteVideoContent() {

    //ルーティング用
    const navigate = useNavigate();

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            toast.error(`動画情報を取得できませんでした。`);
            return;
        }

        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${id}`);
    }

    return {
        clickVideo
    }
}