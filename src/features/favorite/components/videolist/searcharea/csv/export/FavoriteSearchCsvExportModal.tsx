import React from "react";
import { FiUpload } from "react-icons/fi";
import { ModalPortal } from "../../../../../../../components/ModalPortal";
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
            {/* アップロードモーダル */}
            <ModalPortal
                isOpen={isOpenModal}
                modalWidth="45%"
                containerStyle={{
                    fontSize: "16px",
                    display: "flex",
                    flexDirection: "column"
                }}
                modalMinHeight="405px"
                close={closeModal}
            >
                <FavoriteSearchCsvExport
                    close={closeModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}