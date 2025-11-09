import { useLocation, useNavigate } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import useSwitch from "../../../../hooks/useSwitch";
import { useCookies } from "react-cookie";
import useMutationWrapper from "../../../../hooks/useMutationWrapper";
import ENV from '../../../../env.json';
import { errResType, resType } from "../../../../hooks/useMutationWrapperBase";
import { useGlobalAtom } from "../../../../hooks/useGlobalAtom";
import { IsCheckedAuthContext, IsLoginContext, LoginUserInfoContext, SetIsLoginContext, SetLoginUserInfoContext } from "../../../../QueryApp";
import { LOGIN_USER_INFO_INIT, PREV_PATH_KEY, VIDEO_MNG_PATH } from "../../../../consts/CommonConst";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { toast } from "react-toastify";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import { useGetPreviousPath } from "../../../../hooks/useGetPreviousPath";


export function useHeaderUserMenuList() {

    //ルーティング用
    const navigate = useNavigate();
    // ログインフラグ(setter)
    const setIsLogin = SetIsLoginContext.useCtx();
    //ナビゲーション表示フラグ
    const { flag: isOpenUserMenu,
        on: oepnUserMenu,
        off: closeUserMenu } = useSwitch();
    // ログインユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // URL情報
    const location = useLocation();
    // クエリパラメータ(遷移元情報)
    const queryParam = location.search;
    // パス
    const pathName = location.pathname;


    /**
     * ログアウトリクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${VIDEO_MNG_PATH}${ENV.FRONT_USER_LOGOUT}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: () => {

            setLoginUserInfo(LOGIN_USER_INFO_INIT);
            setIsLogin(false);
            navigate(ROUTER_PATH.HOME.ROOT);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            toast.error(`ログアウトに失敗しました。再度お試しください。`);
        },
    });

    /**
     * ログアウト
     */
    function clickLogout() {
        postMutation.mutate();
    }

    /**
     * ユーザー情報更新画面遷移
     */
    function clickUpdateUserInfo() {

        let path = ``;

        if (pathName) {
            path = `?${PREV_PATH_KEY}=${pathName}${queryParam}`;
        }

        navigate(`${ROUTER_PATH.UPDATE_USER_INFO}${path}`);
    }

    /**
     * ユーザーパスワード更新画面遷移
     */
    function clickUpdateUserPassword() {

        let path = ``;

        if (pathName) {
            path = `?${PREV_PATH_KEY}=${pathName}${queryParam}`;
        }

        navigate(`${ROUTER_PATH.UPDATE_USER_PASSWORD}${path}`);
    }

    return {
        isOpenUserMenu,
        closeUserMenu,
        clickLogout,
        loginUserInfo,
        clickUpdateUserInfo,
        clickUpdateUserPassword,
        isMobile,
        clickUserIcon: isOpenUserMenu ? closeUserMenu : oepnUserMenu
    }
}