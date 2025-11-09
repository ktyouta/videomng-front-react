import useSwitch from "../../../../../hooks/useSwitch";


export function useFavoriteMemoDeleteIconArea() {

    // 削除ナビゲーション表示フラグ
    const { flag: isOpenDeleteNav, on: openDeleteNav, off: closeDeleteNav } = useSwitch();

    return {
        isOpenDeleteNav,
        openDeleteNav,
        closeDeleteNav,
    }
}