import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../Common/Hook/useMediaQuery";


export function useHeaderSideMenuList() {

    // 使い方を見るモーダル展開フラグ
    const [isOpenHowToUseModal, setIsOpenHowToUseModal] = useState(false);
    // 使い方を見るモーダル展開フラグ
    const [isOpenUsagePrecautionModal, setIsOpenUsagePrecautionModal] = useState(false);
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    /**
     * 使い方を見るモダール展開
     */
    function openHowToUseModal() {
        setIsOpenHowToUseModal(true);
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
    }

    /**
     * 使用上の注意モダールを閉じる
     */
    function closeUsagePrecautionModal() {
        setIsOpenUsagePrecautionModal(false);
    }

    return {
        isOpenHowToUseModal,
        openHowToUseModal,
        closeHowToUseModal,
        isMobile,
        openUsagePrecautionModal,
        closeUsagePrecautionModal,
        isOpenUsagePrecautionModal,
    }
}