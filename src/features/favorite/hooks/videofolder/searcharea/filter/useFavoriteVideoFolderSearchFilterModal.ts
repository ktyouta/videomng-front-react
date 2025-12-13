import { mediaQuery, useMediaQuery } from "../../../../../../hooks/useMediaQuery";
import useSwitch from "../../../../../../hooks/useSwitch";


export function useFavoriteVideoFolderSearchFilterModal() {

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