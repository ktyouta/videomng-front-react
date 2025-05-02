import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";
import { LOGIN_PATH } from "../../Login/Const/LoginConst";
import { LoginUserInfoContext } from "../../QueryApp";

export function useHeader() {

    const location = useLocation();
    // 現在のパス
    const [nowPath, setNowPath] = useState<string>();
    //ルーティング用
    const navigate = useNavigate();
    // ログインユーザー情報
    const loginUserInfo = LoginUserInfoContext.useCtx();

    /**
     * URL切り替え時のイベント
     */
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length < 2) {
            return;
        }

        const mainPath = pathArray[1] ? pathArray[1] : HOME_ROOT_PATH;
        setNowPath(mainPath);
    }, [location]);

    /**
     * ログインボタン押下イベント
     */
    function clickLogin() {
        navigate(LOGIN_PATH);
    }

    return {
        nowPath,
        clickLogin,
        loginUserInfo,
    }
}