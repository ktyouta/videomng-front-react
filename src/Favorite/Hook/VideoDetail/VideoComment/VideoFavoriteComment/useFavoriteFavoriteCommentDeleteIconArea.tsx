import useSwitch from "../../../../../Common/Hook/useSwitch";


export function useFavoriteFavoriteCommentDeleteIconArea() {

    // 削除ナビゲーション表示フラグ
    const { flag: isOpenDeleteNav, on: openDeleteNav, off: closeDeleteNav } = useSwitch();

    return {
        isOpenDeleteNav,
        openDeleteNav,
        closeDeleteNav,
    }
}