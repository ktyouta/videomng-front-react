import styled from "styled-components";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../../../../components/IconComponent";
import { MEDIA } from "../../../../../../../consts/MediaConst";
import { useFavoriteSearchFilterModal } from "../../../../../hooks/videolist/searcharea/filter/useFavoriteSearchFilterModal";
import { FiDownload } from "react-icons/fi";
import { FavoriteSearchCsvImport } from "./FavoriteSearchCsvImport";
import { useFavoriteSearchCsvImportModal } from "../../../../../hooks/videolist/searcharea/csv/import/useFavoriteSearchCsvImportModal";
import { ModalPortal } from "../../../../../../../components/ModalPortal";


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
`;

/**
 * CSV出力モーダル
 */
export function FavoriteSearchCsvImportModal() {

    console.log("FavoriteSearchCsvImportModal render");

    const {
        isOpenModal,
        openModal,
        closeModal,
        isMobile } = useFavoriteSearchCsvImportModal();


    return (
        <React.Fragment>
            <FilterIconAreaDiv>
                <IconComponent
                    icon={FiDownload}
                    onclick={openModal}
                    size="45%"
                />
            </FilterIconAreaDiv>
            {
                !isMobile &&
                <FilterTitleSpan >
                    保存
                </FilterTitleSpan>
            }
            {/*ダウンロードモーダル */}
            <ModalPortal
                isOpen={isOpenModal}
                modalWidth={isMobile ? `80%` : `45%`}
                containerStyle={{
                    minHeight: `384px`,
                    fontSize: isMobile ? "12px" : "15px",
                    display: "flex",
                    flexDirection: "column"
                }}
                modalHeight=""
            >
                <FavoriteSearchCsvImport
                    close={closeModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}