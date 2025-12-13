import React from "react";
import { FiUpload } from "react-icons/fi";
import styled from "styled-components";
import { IconComponent } from "../../../../../../../components/IconComponent";
import { ModalPortal } from "../../../../../../../components/ModalPortal";
import { useFavoriteSearchCsvExportModal } from "../../../../../hooks/videolist/searcharea/csv/export/useFavoriteSearchCsvExportModal";
import { FavoriteSearchCsvExport } from "./FavoriteSearchCsvExport";


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

const FilterTitleSpan = styled.span`
  color: #9e9e9e;
  font-size: 14px;
  white-space: nowrap;
  margin-right: 1%;
  cursor: pointer;
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
            <FilterTitleSpan
                onClick={openModal}
            >
                取込
            </FilterTitleSpan>
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