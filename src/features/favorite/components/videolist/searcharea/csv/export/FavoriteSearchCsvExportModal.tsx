import React from "react";
import { FiUpload } from "react-icons/fi";
import { useFavoriteSearchCsvExportModal } from "../../../../../hooks/videolist/searcharea/csv/export/useFavoriteSearchCsvExportModal";
import { FavoriteSearchActionButton } from "../../../../FavoriteSearchActionButton";
import { FavoriteSearchCsvExport } from "./FavoriteSearchCsvExport";


/**
 * CSV出力モーダル
 */
export function FavoriteSearchCsvExportModal() {

    console.log("FavoriteSearchCsvExportModal render");

    const {
        isOpenModal,
        openModal,
        closeModal, } = useFavoriteSearchCsvExportModal();


    return (
        <React.Fragment>
            <FavoriteSearchActionButton
                icon={FiUpload}
                label="取込"
                onClick={openModal}
            />
            {/* アップロードモーダル（閉じている間は選択ファイル等の状態を保持しないため未マウントにする） */}
            {
                isOpenModal &&
                <FavoriteSearchCsvExport
                    isOpen={isOpenModal}
                    close={closeModal}
                />
            }
        </React.Fragment>
    );
}