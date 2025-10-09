import useSwitch from "../../../../Common/Hook/useSwitch";

export function useFavoriteDetailSettingUpdateIcon() {

    // 更新ナビゲーション表示フラグ
    const { flag: isOpenUpdateNav, on: openUpdateNav, off: closeUpdateNav } = useSwitch();

    return {
        isOpenUpdateNav,
        openUpdateNav,
        closeUpdateNav,
    }
}