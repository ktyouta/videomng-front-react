import useSwitch from "../../../../../Common/Hook/useSwitch";


export function useHomeVideoContentFavoriteIconArea() {

    // お気に入りナビゲーション表示フラグ
    const { flag: isOpenFavoriteNav, on: openFavoriteNav, off: closeFavoriteNav } = useSwitch();

    return {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav,
    }
}