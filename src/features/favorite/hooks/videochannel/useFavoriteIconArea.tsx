import useSwitch from "../../../../hooks/useSwitch";


export function useFavoriteIconArea() {

    // お気に入りナビゲーション表示フラグ
    const { flag: isOpenFavoriteNav, on: openFavoriteNav, off: closeFavoriteNav } = useSwitch();

    return {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav,
    }
}