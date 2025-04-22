import { useLocation, useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../Const/HomeConst";
import { useContext } from "react";
import { SetVideoIdContext } from "../Component/Home";


export function useHomeVideoContent() {

    //ルーティング用
    const navigate = useNavigate();
    // 動画ID(setter)
    const setVideoId = SetVideoIdContext.useCtx();

    /**
     * 動画サムネイル、タイトルのクリックイベント
     */
    function clickVideo(id: string) {

        if (!id) {
            alert(`動画情報を取得できませんでした。`);
            return;
        }

        setVideoId(id);
        navigate(`${HOME_ROOT_PATH}/${id}`);
    }

    return {
        clickVideo
    }
}