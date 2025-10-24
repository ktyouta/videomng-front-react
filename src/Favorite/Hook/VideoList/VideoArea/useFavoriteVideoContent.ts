import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { FAVORITE_PREV_PATH_KEY } from "../../../Const/FavoriteConst";


export function useFavoriteVideoContent() {

    //ルーティング用
    const navigate = useNavigate();
    // クエリ作成用
    const { query } = useCreateFavoriteVideoListQuery();

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            toast.error(`動画情報を取得できませんでした。`);
            return;
        }

        navigate(`${ROUTER_PATH.FAVORITE.ROOT}${ROUTER_PATH.FAVORITE.DETAIL}/${id}?${FAVORITE_PREV_PATH_KEY}=${ROUTER_PATH.FAVORITE.ROOT}${query}`);
    }

    return {
        clickVideo
    }
}