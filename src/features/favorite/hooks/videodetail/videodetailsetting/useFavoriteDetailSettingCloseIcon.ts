import useSwitch from "../../../../../hooks/useSwitch";

export function useFavoriteDetailSettingCloseIcon() {

    // 閉じるナビゲーション表示フラグ
    const { flag: isOpenCloseNav, on: openCloseNav, off: closeCloseNav } = useSwitch();


    return {
        isOpenCloseNav,
        openCloseNav,
        closeCloseNav,
    }
}