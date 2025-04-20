import { useSetAtom } from "jotai";
import { videoIdAtom } from "../Atom/HomeAtom";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../Const/HomeConst";


export function useHomeVideoContent() {

    // 動画ID
    const setVideoId = useSetAtom(videoIdAtom);
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

        setVideoId(id);
        navigate(`${HOME_ROOT_PATH}/${id}`);
    }

    return {
        clickVideo
    }
}