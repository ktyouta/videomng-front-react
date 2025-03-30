import useSwitch from "../../Common/Hook/useSwitch";

export function useFavoriteBlockCommentModalIcon() {

    // 非表示リストナビゲーション表示フラグ
    const { flag: isOpenBlockListNav, on: openBlockListNav, off: closeBlockListNav } = useSwitch();
    // 非表示リストモーダル表示フラグ
    const { flag: isOpenBlockListModal, on: openBlockListModal, off: closeBlockListModal } = useSwitch();


    return {
        isOpenBlockListNav,
        openBlockListNav,
        closeBlockListNav,
        isOpenBlockListModal,
        openBlockListModal,
        closeBlockListModal,
    }
}