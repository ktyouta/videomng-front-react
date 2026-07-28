import useSwitch from "../../../../../../../hooks/useSwitch";


export function useFavoriteSearchCsvImportModal() {

    // モーダルの表示フラグ
    const { flag: isOpenModal, on: openModal, off: closeModal } = useSwitch();

    return {
        isOpenModal,
        openModal,
        closeModal,
    }
}