import { useLocation, useNavigate } from "react-router-dom";
import { FAVORITE_ROOT_PATH } from "../Const/FavoriteConst";
import { SetFavoriteVideoIdContext } from "../Component/Favorite";


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
            alert(`動画情報を取得できませんでした。`);
            return;
        }

        setFavoriteVideoId(id);
        navigate(`${FAVORITE_ROOT_PATH}/${id}`);
    }

    return {
        clickVideo
    }
}