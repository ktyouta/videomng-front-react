import { useLocation, useNavigate } from "react-router-dom";
import { IsLoginContext } from "../../../../app/components/QueryApp";
import { PREV_PATH_KEY } from "../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";


export function useHeaderUserMenu() {

    //ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // URL情報
    const location = useLocation();
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;
    // パス
    const pathName = location.pathname;

    /**
     * ログインボタン押下イベント
     */
    function clickLogin() {

        let path = ``;

        if (pathName) {
            path = `?${PREV_PATH_KEY}=${pathName}${queryParam}`;
        }

        navigate(`${ROUTER_PATH.LOGIN}${path}`);
    }

    return {
        clickLogin,
        isLogin,
        isMobile,
    }
}