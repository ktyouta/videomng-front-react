import React from "react";
import { FiDownload } from "react-icons/fi";
import { useFavoriteSearchCsvImportModal } from "../../../../../hooks/videolist/searcharea/csv/import/useFavoriteSearchCsvImportModal";
import { FavoriteSearchActionButton } from "../../../../FavoriteSearchActionButton";
import { FavoriteSearchCsvImport } from "./FavoriteSearchCsvImport";


/**
 * CSV出力モーダル
 */
export function FavoriteSearchCsvImportModal() {

    console.log("FavoriteSearchCsvImportModal render");

    const {
        isOpenModal,
        openModal,
        closeModal } = useFavoriteSearchCsvImportModal();


    return (
        <React.Fragment>
            <FavoriteSearchActionButton
                icon={FiDownload}
                label="保存"
                onClick={openModal}
            />
            {/*ダウンロードモーダル（閉じている間は内部状態を保持しないため未マウントにする） */}
            {
                isOpenModal &&
                <FavoriteSearchCsvImport
                    isOpen={isOpenModal}
                    close={closeModal}
                />
            }
        </React.Fragment>
    );
}