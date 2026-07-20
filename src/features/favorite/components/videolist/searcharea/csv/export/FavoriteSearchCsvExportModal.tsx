import React from "react";
import { FiUpload } from "react-icons/fi";
import { ModalPortal } from "../../../../../../../components/ModalPortal";
import { useFavoriteSearchCsvExportModal } from "../../../../../hooks/videolist/searcharea/csv/export/useFavoriteSearchCsvExportModal";
import { FavoriteSearchActionButton } from "../../FavoriteSearchActionButton";
import { FavoriteSearchCsvExport } from "./FavoriteSearchCsvExport";


/**
 * CSV出力モーダル
 */
export function FavoriteSearchCsvExportModal() {

    console.log("FavoriteSearchCsvExportModal render");

    const {
        isOpenModal,
        openModal,
        closeModal,
        isMobile, } = useFavoriteSearchCsvExportModal();


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
                modalWidth={isMobile ? `93%` : `45%`}
                containerStyle={{
                    fontSize: isMobile ? "12px" : "15px",
                    display: "flex",
                    flexDirection: "column"
                }}
                modalMinHeight="405px"
                close={closeModal}
            >
                <FavoriteSearchCsvExport
                    close={closeModal}
                    isMobile={isMobile}
                />
            </ModalPortal>
        </React.Fragment>
    );
}