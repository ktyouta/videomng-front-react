import React from "react";
import { FiDownload } from "react-icons/fi";
import styled from "styled-components";
import { IconComponent } from "../../../../../../../components/IconComponent";
import { ModalPortal } from "../../../../../../../components/ModalPortal";
import { MEDIA } from "../../../../../../../consts/MediaConst";
import { useFavoriteSearchCsvImportModal } from "../../../../../hooks/videolist/searcharea/csv/import/useFavoriteSearchCsvImportModal";
import { FavoriteSearchCsvImport } from "./FavoriteSearchCsvImport";


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
  white-space: nowrap;
  margin-right: 1%;
  cursor: pointer;
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 12px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 14px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 14px;
  }
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
            <FilterTitleSpan
                onClick={openModal}
            >
                保存
            </FilterTitleSpan>
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
                modalMinHeight=""
            >
                <FavoriteSearchCsvImport
                    close={closeModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}