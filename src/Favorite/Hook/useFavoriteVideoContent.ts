import { useLocation, useNavigate } from "react-router-dom";
import { SetFavoriteVideoIdContext } from "../Component/Favorite";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { toast } from "react-toastify";


export function useFavoriteVideoContent() {

    // 動画ID
    const setFavoriteVideoId = SetFavoriteVideoIdContext.useCtx();
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

        setFavoriteVideoId(id);
        navigate(`${ROUTER_PATH.FAVORITE}/${id}`);
    }

    return {
        clickVideo
    }
}