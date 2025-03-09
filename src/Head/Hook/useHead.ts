import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";
import { LOGIN_PATH } from "../../Login/Const/LoginConst";

export function useHead() {

    const location = useLocation();
    // 現在のパス
    const [nowPath, setNowPath] = useState<string>();
    //ルーティング用
    const navigate = useNavigate();

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
        clickLogin
    }
}