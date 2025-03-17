import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";
import { LOGIN_PATH } from "../../Login/Const/LoginConst";
import { useAtom, useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";
import useSwitch from "../../Common/Hook/useSwitch";
import { useCookies } from "react-cookie";
import useMutationWrapper from "../../Common/Hook/useMutationWrapper";
import ENV from '../../env.json';
import { errResType, resType } from "../../Common/Hook/useMutationWrapperBase";


export function useHeaderUserMenu() {

    //ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const [isLogin, setIsLogin] = useAtom(isLoginAtom);
    //ナビゲーション表示フラグ
    const {
        flag: isOpenUserMenu,
        on: oepnUserMenu,
        off: closeUserMenu } = useSwitch();


    /**
     * ログアウトリクエスト
     */
    const postMutation = useMutationWrapper({
        url: `${ENV.PROTOCOL}${ENV.DOMAIN}${ENV.PORT}${ENV.FRONT_USER_LOGOUT}`,
        method: "POST",
        // 正常終了後の処理
        afSuccessFn: () => {

            setIsLogin(false);
            navigate(HOME_ROOT_PATH);
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
        navigate(LOGIN_PATH);
    }

    /**
     * ログアウト
     */
    const clickLogout = () => {
        postMutation.mutate();
    }

    return {
        clickLogin,
        isLogin,
        isOpenUserMenu,
        oepnUserMenu,
        closeUserMenu,
        clickLogout,
    }
}