import useSwitch from "../../Common/Hook/useSwitch";

export function useFavoriteFavoriteCommentModalIcon() {

    // お気に入りリストナビゲーション表示フラグ
    const { flag: isOpenFavoriteListNav, on: openFavoriteListNav, off: closeFavoriteListNav } = useSwitch();
    // お気に入りリストモーダル表示フラグ
    const { flag: isOpenFavoriteListModal, on: openFavoriteListModal, off: closeFavoriteListModal } = useSwitch();


    return {
        isOpenFavoriteListNav,
        openFavoriteListNav,
        closeFavoriteListNav,
        isOpenFavoriteListModal,
        openFavoriteListModal,
        closeFavoriteListModal,
    }
}