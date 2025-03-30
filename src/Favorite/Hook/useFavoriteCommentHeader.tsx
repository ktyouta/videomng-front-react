import useSwitch from "../../Common/Hook/useSwitch";


export function useFavoriteCommentHeader() {

    // 非表示リストナビゲーション表示フラグ
    const { flag: isOpenBlockListNav, on: openBlockListNav, off: closeBlockListNav } = useSwitch();
    // 非表示リストモーダル表示フラグ
    const { flag: isOpenBlockListModal, on: openBlockListModal, off: closeBlockListModal } = useSwitch();
    // お気に入りリストナビゲーション表示フラグ
    const { flag: isOpenFavoriteListNav, on: openFavoriteListNav, off: closeFavoriteListNav } = useSwitch();
    // お気に入りリストモーダル表示フラグ
    const { flag: isOpenFavoriteListModal, on: openFavoriteListModal, off: closeFavoriteListModal } = useSwitch();


    return {
        isOpenBlockListNav,
        openBlockListNav,
        closeBlockListNav,
        isOpenBlockListModal,
        openBlockListModal,
        closeBlockListModal,
        isOpenFavoriteListNav,
        openFavoriteListNav,
        closeFavoriteListNav,
        isOpenFavoriteListModal,
        openFavoriteListModal,
        closeFavoriteListModal,
    }
}