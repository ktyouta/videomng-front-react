import useSwitch from "../../../../../../../hooks/useSwitch";
import { mediaQuery, useMediaQuery } from "../../../../../../../hooks/useMediaQuery";


export function useFavoriteSearchCsvImportModal() {

    // モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);


    return {
        isOpenModal,
        openModal,
        closeModal,
        isMobile,
    }
}