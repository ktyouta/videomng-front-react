import { useLocation, useNavigate } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import useSwitch from "../../../Common/Hook/useSwitch";
import { useCookies } from "react-cookie";
import ENV from '../../../env.json';
import { errResType, resType } from "../../../Common/Hook/useMutationWrapperBase";
import { useGlobalAtom } from "../../../Common/Hook/useGlobalAtom";
import { IsCheckedAuthContext, IsLoginContext, LoginUserInfoContext, SetIsLoginContext, SetLoginUserInfoContext } from "../../../QueryApp";
import { LOGIN_USER_INFO_INIT, VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useGetPreviousPath } from "../../../Common/Hook/useGetPreviousPath";
import { LOGIN_PREV_PATH_KEY } from "../../../Login/Const/LoginConst";


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
            path = `?${LOGIN_PREV_PATH_KEY}=${pathName}${queryParam}`;
        }

        navigate(`${ROUTER_PATH.LOGIN}${path}`);
    }

    return {
        clickLogin,
        isLogin,
        isMobile,
    }
}