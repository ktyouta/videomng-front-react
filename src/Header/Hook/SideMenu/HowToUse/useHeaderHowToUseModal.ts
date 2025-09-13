import { useState } from "react";
import { mediaQuery, useMediaQuery } from "../../../../Common/Hook/useMediaQuery";


export function useHeaderHowToUseModal() {

    // 使い方を見るモーダル展開フラグ
    const [isOpenHowToUseModal, setIsOpenHowToUseModal] = useState(false);
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


    return {
        isOpenHowToUseModal,
        openHowToUseModal,
        closeHowToUseModal,
        isMobile,
    }
}