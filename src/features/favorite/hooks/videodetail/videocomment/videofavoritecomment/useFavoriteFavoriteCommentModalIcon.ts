import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
import useSwitch from "../../../../../../hooks/useSwitch";

export function useFavoriteFavoriteCommentModalIcon() {

    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // お気に入りリストナビゲーション表示フラグ
    const { flag: isOpenFavoriteListNav, on: openFavoriteListNav, off: closeFavoriteListNav } = useSwitch();
    // お気に入りリストモーダル表示フラグ
    const { flag: isOpenFavoriteListModal, on: openFavoriteListModal, off: closeFavoriteListModal } = useSwitch();


    return {
        isMobile,
        isOpenFavoriteListNav,
        openFavoriteListNav,
        closeFavoriteListNav,
        isOpenFavoriteListModal,
        openFavoriteListModal,
        closeFavoriteListModal,
    }
}