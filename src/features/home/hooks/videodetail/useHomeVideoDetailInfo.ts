import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IsLoginContext } from "../../../../app/components/QueryApp";
import { PREV_PATH_KEY } from "../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import useSwitch from "../../../../hooks/useSwitch";
import { playVideo } from "../../../../utils/playVideo";
import { useVideoId } from "./useVideoId";


export function useHomeVideoDetailInfo() {

    // ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 動画ID
    const videoId = useVideoId();
    // URL情報
    const location = useLocation();
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;
    // パス
    const pathName = location.pathname;
    // タグ選択ダイアログ表示フラグ
    const { flag: isOpenTagSelectModal, on: openTagSelectModal, off: closeTagSelectModal } = useSwitch();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    /**
     * お気に入り登録ボタン押下
     */
    function clickRegister() {
        openTagSelectModal();
    }

    /**
     * 動画を再生
     */
    function play() {

        if (!videoId) {
            toast.error(`動画を再生できません。`);
            return;
        }

        playVideo(videoId);
    }

    /**
     * ログイン画面に遷移
     */
    function moveLogin() {

        let path = ``;

        if (videoId) {
            path = `?${PREV_PATH_KEY}=${pathName}${queryParam}`;
        }

        navigate(`${ROUTER_PATH.LOGIN}${path}`);
    }

    return {
        clickRegister,
        play,
        isLogin,
        moveLogin,
        isOpenTagSelectModal,
        closeTagSelectModal,
        isMobile,
    }
}