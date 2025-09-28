import styled from "styled-components";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../../../Common/Component/IconComponent";
import { MEDIA } from "../../../../../../Common/Const/MediaConst";
import { useFavoriteSearchFilterModal } from "../../../../../Hook/VideoList/SearchArea/Filter/useFavoriteSearchFilterModal";
import { FiUpload } from "react-icons/fi";
import { FavoriteSearchCsvExport } from "./FavoriteSearchCsvExport";
import { useFavoriteSearchCsvExportModal } from "../../../../../Hook/VideoList/SearchArea/Csv/Export/useFavoriteSearchCsvExportModal";
import { ModalPortal } from "../../../../../../Common/Component/ModalPortal";


const FilterIconAreaDiv = styled.div`
  width: 46px;
  height: 99%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#9e9e9e;
`;

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
            <FilterIconAreaDiv>
                <IconComponent
                    icon={FiUpload}
                    onclick={openModal}
                    size="45%"
                />
            </FilterIconAreaDiv>
            {/* アップロードモーダル */}
            <ModalPortal
                isOpen={isOpenModal}
                modalWidth={isMobile ? `80%` : `45%`}
                containerStyle={{
                    minHeight: `405px`,
                    fontSize: isMobile ? "12px" : "15px",
                    display: "flex",
                    flexDirection: "column"
                }}
                modalHeight=""
            >
                <FavoriteSearchCsvExport
                    close={closeModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}