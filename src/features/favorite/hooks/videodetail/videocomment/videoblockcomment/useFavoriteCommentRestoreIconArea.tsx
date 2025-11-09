import useSwitch from "../../../../../../hooks/useSwitch";


export function useFavoriteCommentRestoreIconArea() {

    // 再表示ナビゲーション表示フラグ
    const { flag: isOpenBlockNav, on: openBlockNav, off: closeBlockNav } = useSwitch();

    return {
        isOpenBlockNav,
        openBlockNav,
        closeBlockNav,
    }
}