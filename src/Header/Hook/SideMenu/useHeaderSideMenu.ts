import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";


export function useHeaderSideMenu() {

    // サイドメニュー展開フラグ
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    /**
     * サイドメニュー展開
     */
    function openSideMenu() {
        setIsOpenSideMenu(true);
    }

    /**
     * サイドメニューを閉じる
     */
    function closeSideMenu() {
        setIsOpenSideMenu(false);
    }


    return {
        openSideMenu,
        closeSideMenu,
        isOpenSideMenu,
        isMobile,
    }
}