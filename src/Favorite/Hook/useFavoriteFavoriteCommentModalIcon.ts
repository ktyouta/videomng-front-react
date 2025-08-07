import { mediaQuery, useMediaQuery } from "../../Common/Hook/useMediaQuery";
import useSwitch from "../../Common/Hook/useSwitch";

export function useFavoriteFavoriteCommentModalIcon() {

    // お気に入りリストナビゲーション表示フラグ
    const { flag: isOpenFavoriteListNav, on: openFavoriteListNav, off: closeFavoriteListNav } = useSwitch();
    // お気に入りリストモーダル表示フラグ
    const { flag: isOpenFavoriteListModal, on: openFavoriteListModal, off: closeFavoriteListModal } = useSwitch();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    return {
        isOpenFavoriteListNav,
        openFavoriteListNav,
        closeFavoriteListNav,
        isOpenFavoriteListModal,
        openFavoriteListModal,
        closeFavoriteListModal,
        isMobile,
    }
}