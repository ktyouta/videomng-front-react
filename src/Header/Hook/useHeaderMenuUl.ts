import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";

export function useHeaderMenuUl() {

    const location = useLocation();
    // 現在のパス
    const [nowPath, setNowPath] = useState<string>();

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

    return {
        nowPath
    }
}