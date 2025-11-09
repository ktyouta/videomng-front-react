import useSwitch from "../../../../../hooks/useSwitch";


export function useFavoriteMemoUpdateIconArea() {

    // 更新ナビゲーション表示フラグ
    const { flag: isOpenUpdateNav, on: openUpdateNav, off: closeUpdateNav } = useSwitch();

    return {
        isOpenUpdateNav,
        openUpdateNav,
        closeUpdateNav,
    }
}