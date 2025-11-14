import useSwitch from "../../../../../../hooks/useSwitch";
import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";


export function useFavoriteSearchFilterModal() {

    // 条件指定モーダルの表示フラグ
    const { flag: isOpenFilterModal, on: openFilterModal, off: closeFilterModal } = useSwitch();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    return {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        isMobile,
    }
}