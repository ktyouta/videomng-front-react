import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import { MENU_NO } from "../../const/HeaderConst";


export function useHeaderSideMenu() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 展開中のメニュー
    const [openMenuNo, setOpenMenuNo] = useState<MENU_NO>(MENU_NO.NONE);
    // サイドメニュー展開フラグ
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);


    /**
     * サイドメニューを開く
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

    /**
     * 内部のメニューを展開する
     * @param menuNo 
     */
    function openInnerMenu(menuNo: MENU_NO) {
        setOpenMenuNo(menuNo);
        // メニュー展開時に
        closeSideMenu();
    }

    /**
     * メニューを閉じる
     */
    function closeInnerMenu() {
        setOpenMenuNo(MENU_NO.NONE);
    }

    return {
        isMobile,
        openInnerMenu,
        openMenuNo,
        closeInnerMenu,
        isOpenSideMenu,
        setIsOpenSideMenu,
        openSideMenu,
        closeSideMenu,
    }
}