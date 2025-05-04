import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import useSwitch from "../../Common/Hook/useSwitch";
import { useCookies } from "react-cookie";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from '../../env.json';
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";
import { useGlobalAtom } from "../../Common/Hook/useGlobalAtom";
import { IsLoginContext, LoginUserInfoContext, SetIsLoginContext, SetLoginUserInfoContext } from "../../QueryApp";
import { LOGIN_USER_INFO_INIT } from "../../Common/Const/CommonConst";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";


export function useHeaderUserMenu() {

    //ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    const setIsLogin = SetIsLoginContext.useCtx();
    //ナビゲーション表示フラグ
    const { flag: isOpenUserMenu,
        on: oepnUserMenu,
        off: closeUserMenu } = useSwitch();
    // ログインユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();
    // ログインユーザー情報(setter)
    const setLoginUserInfo = SetLoginUserInfoContext.useCtx();


    /**
     * ログアウトリクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FRONT_USER_LOGOUT}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: () => {

            setLoginUserInfo(LOGIN_USER_INFO_INIT);
            setIsLogin(false);
            navigate(ROUTER_PATH.HOME);
        },
        // 失敗後の処理
        afErrorFn: (res: errResType) => {
            alert(`ログアウトに失敗しました。再度お試しください。`);
        },
    });


    /**
     * ログインボタン押下イベント
     */
    function clickLogin() {
        navigate(ROUTER_PATH.LOGIN);
    }

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
        navigate(ROUTER_PATH.UPDATE_USER_INFO);
    }

    return {
        clickLogin,
        isLogin,
        isOpenUserMenu,
        oepnUserMenu,
        closeUserMenu,
        clickLogout,
        loginUserInfo,
        clickUpdateUserInfo,
    }
}