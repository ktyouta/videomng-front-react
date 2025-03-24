import useSwitch from "../../Common/Hook/useSwitch";


export function useFavoriteCommentBlockIconArea() {

    // ブロックナビゲーション表示フラグ
    const { flag: isOpenBlockNav, on: openBlockNav, off: closeBlockNav } = useSwitch();

    return {
        isOpenBlockNav,
        openBlockNav,
        closeBlockNav,
    }
}