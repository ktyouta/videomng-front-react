import useSwitch from "../../../../../../Common/Hook/useSwitch";
import { mediaQuery, useMediaQuery } from "../../../../../../Common/Hook/useMediaQuery";


export function useFavoriteSearchCsvExportModal() {

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