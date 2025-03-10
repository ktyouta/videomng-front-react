import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";
import { LOGIN_PATH } from "../../Login/Const/LoginConst";
import { useAtom, useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";
import useSwitch from "../../Common/Hook/useSwitch";
import { useCookies } from "react-cookie";

export function useHeaderUserMenu() {

    //ルーティング用
    const navigate = useNavigate();
    // ログインフラグ
    const [isLogin, setIsLogin] = useAtom(isLoginAtom);
    //ナビゲーション表示フラグ
    const {
        flag: isOpenUserMenu,
        onFlag: oepnUserMenu,
        offFlag: closeUserMenu } = useSwitch();
    //認証クッキー
    const [cookie, , removeCookie] = useCookies();


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

        // クッキーを削除
        Object.keys(cookie).forEach((key) => {
            removeCookie(key, { path: '/' });
        });

        setIsLogin(false);
        navigate(HOME_ROOT_PATH);
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