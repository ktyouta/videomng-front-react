import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginUserInfoContext } from "../../QueryApp";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { mediaQuery, useMediaQuery } from "../../Common/Hook/useMediaQuery";

export function useHeader() {

    // サイドメニュー展開フラグ
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
    // 使い方を見るモーダル展開フラグ
    const [isOpenHowToUseModal, setIsOpenHowToUseModal] = useState(false);
    // 使い方を見るモーダル展開フラグ
    const [isOpenUsagePrecautionModal, setIsOpenUsagePrecautionModal] = useState(false);
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

    /**
     * 使い方を見るモダール展開
     */
    function openHowToUseModal() {
        setIsOpenHowToUseModal(true);
        closeSideMenu();
    }

    /**
     * 使い方を見るモダールを閉じる
     */
    function closeHowToUseModal() {
        setIsOpenHowToUseModal(false);
    }

    /**
     * 使用上の注意モダール展開
     */
    function openUsagePrecautionModal() {
        setIsOpenUsagePrecautionModal(true);
        closeSideMenu();
    }

    /**
     * 使用上の注意モダールを閉じる
     */
    function closeUsagePrecautionModal() {
        setIsOpenUsagePrecautionModal(false);
    }

    return {
        openSideMenu,
        closeSideMenu,
        isOpenSideMenu,
        isOpenHowToUseModal,
        openHowToUseModal,
        closeHowToUseModal,
        isMobile,
        openUsagePrecautionModal,
        closeUsagePrecautionModal,
        isOpenUsagePrecautionModal,
    }
}