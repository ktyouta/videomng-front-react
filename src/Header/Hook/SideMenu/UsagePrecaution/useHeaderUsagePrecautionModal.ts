import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";


export function useHeaderUsagePrecautionModal() {

    // 使用上の注意モーダル展開フラグ
    const [isOpenUsagePrecautionModal, setIsOpenUsagePrecautionModal] = useState(false);
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

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
        isMobile,
        openUsagePrecautionModal,
        closeUsagePrecautionModal,
        isOpenUsagePrecautionModal,
    }
}