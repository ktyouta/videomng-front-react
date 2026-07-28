import React from "react";
import { FiDownload } from "react-icons/fi";
import { ModalPortal } from "../../../../../../../components/ModalPortal";
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
            {/*ダウンロードモーダル */}
            <ModalPortal
                isOpen={isOpenModal}
                modalWidth="45%"
                containerStyle={{
                    minHeight: `384px`,
                    fontSize: "16px",
                    display: "flex",
                    flexDirection: "column"
                }}
                modalMinHeight=""
                close={closeModal}
            >
                <FavoriteSearchCsvImport
                    close={closeModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}