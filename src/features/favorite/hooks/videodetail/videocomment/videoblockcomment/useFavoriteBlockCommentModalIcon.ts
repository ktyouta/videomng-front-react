import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
import useSwitch from "../../../../../../hooks/useSwitch";

export function useFavoriteBlockCommentModalIcon() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // 非表示リストナビゲーション表示フラグ
    const { flag: isOpenBlockListNav, on: openBlockListNav, off: closeBlockListNav } = useSwitch();
    // 非表示リストモーダル表示フラグ
    const { flag: isOpenBlockListModal, on: openBlockListModal, off: closeBlockListModal } = useSwitch();


    return {
        isMobile,
        isOpenBlockListNav,
        openBlockListNav,
        closeBlockListNav,
        isOpenBlockListModal,
        openBlockListModal,
        closeBlockListModal,
    }
}