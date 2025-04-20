import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";
import { useAtomValue } from "jotai";
import { isLoginAtom } from "../../Common/Atom/CommonAtom";
import { useGlobalAtomValue } from "../../Common/Hook/useGlobalAtom";

export function useHeaderMenuUl() {

    const location = useLocation();
    // 現在のパス
    const [nowPath, setNowPath] = useState<string>();
    // ログインフラグ
    const isLogin = useGlobalAtomValue(isLoginAtom);

    /**
     * URL切り替え時のイベント
     */
    useEffect(() => {

        const pathArray = window.location.pathname.split("/");

        if (pathArray.length < 2) {
            return;
        }

        const mainPath = pathArray[1] ? `/${pathArray[1]}` : HOME_ROOT_PATH;
        setNowPath(mainPath);
    }, [location]);

    return {
        nowPath,
        isLogin
    }
}