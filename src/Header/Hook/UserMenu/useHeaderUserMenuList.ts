import { useLocation, useNavigate } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import useSwitch from "../../../Common/Hook/useSwitch";
import { useCookies } from "react-cookie";
import useMutationWrapper from "../../../Common/Hook/useMutationWrapper";
import ENV from '../../../env.json';
import { errResType, resType } from "../../../Common/Hook/useMutationWrapperBase";
import { useGlobalAtom } from "../../../Common/Hook/useGlobalAtom";
import { IsCheckedAuthContext, IsLoginContext, LoginUserInfoContext, SetIsLoginContext, SetLoginUserInfoContext } from "../../../QueryApp";
import { LOGIN_USER_INFO_INIT, VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { ROUTER_PATH } from "../../../Common/Const/RouterPath";
import { toast } from "react-toastify";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";
import { useGetPreviousPath } from "../../../Common/Hook/useGetPreviousPath";


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
    // 遷移元パス
    const previousPath = useGetPreviousPath();

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
        navigate(`${ROUTER_PATH.UPDATE_USER_INFO}?previouspath=${encodeURIComponent(previousPath)}`);
    }

    /**
     * ユーザーパスワード更新画面遷移
     */
    function clickUpdateUserPassword() {
        navigate(`${ROUTER_PATH.UPDATE_USER_PASSWORD}?previouspath=${encodeURIComponent(previousPath)}`);
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