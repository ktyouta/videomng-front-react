import { useState } from "react";
import { IsLoginContext } from "../../../../app/components/QueryApp";
import { ROUTER_PATH } from "../../../../consts/RouterPath";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import { mediaQuery, useMediaQuery } from "../../../../hooks/useMediaQuery";
import { MENU_NO } from "../../const/HeaderConst";


export function useHeaderSideMenu() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 展開中のメニュー
    const [openMenuNo, setOpenMenuNo] = useState<MENU_NO>(MENU_NO.NONE);
    // サイドメニュー展開フラグ
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
    // ログインフラグ
    const isLogin = IsLoginContext.useCtx();
    // 画面遷移用
    const { appNavigate } = useAppNavigation();

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
        // メニュー展開時にサイドメニューを閉じる
        closeSideMenu();
    }

    /**
     * メニューを閉じる
     */
    function closeInnerMenu() {
        setOpenMenuNo(MENU_NO.NONE);
    }

    /**
     * ホーム画面に遷移
     */
    function moveToHome() {
        appNavigate(ROUTER_PATH.HOME.ROOT);
        closeSideMenu();
    }

    /**
     * お気に入り画面に遷移
     */
    function moveToFavorite() {
        appNavigate(ROUTER_PATH.FAVORITE.ROOT);
        closeSideMenu();
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
        moveToHome,
        moveToFavorite,
        isLogin,
    }
}