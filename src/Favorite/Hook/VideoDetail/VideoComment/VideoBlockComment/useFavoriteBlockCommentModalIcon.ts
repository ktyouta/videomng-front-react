import { mediaQuery, useMediaQuery } from "../../../../../Common/Hook/useMediaQuery";
import useSwitch from "../../../../../Common/Hook/useSwitch";

export function useFavoriteBlockCommentModalIcon() {

    // 非表示リストナビゲーション表示フラグ
    const { flag: isOpenBlockListNav, on: openBlockListNav, off: closeBlockListNav } = useSwitch();
    // 非表示リストモーダル表示フラグ
    const { flag: isOpenBlockListModal, on: openBlockListModal, off: closeBlockListModal } = useSwitch();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    return {
        isOpenBlockListNav,
        openBlockListNav,
        closeBlockListNav,
        isOpenBlockListModal,
        openBlockListModal,
        closeBlockListModal,
        isMobile,
    }
}