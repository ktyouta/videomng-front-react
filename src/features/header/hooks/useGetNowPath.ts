import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useGetNowPath() {

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

        const newPath = pathArray[1];

        if (nowPath === newPath) {
            return;
        }

        setNowPath(`/${newPath}`);
    }, [location]);

    return {
        nowPath
    };
}