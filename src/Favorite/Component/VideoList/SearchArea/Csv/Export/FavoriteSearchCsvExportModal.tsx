import styled from "styled-components";
import ButtonComponent from "../../../../../../Common/Component/ButtonComponent";
import ModalComponent from "../../../../../../Common/Component/ModalComponent";
import { OverlayDiv } from "../../../../../../Common/StyledComponent/OverlayDiv";
import TagButtonComponent from "../../../../../../Common/Component/TagButtonComponent";
import { FlexSpaceDiv } from "../../../../../../Common/StyledComponent/FlexSpaceDiv";
import ComboComponent from "../../../../../../Common/Component/ComboComponent";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../../../Common/Component/IconComponent";
import { MEDIA } from "../../../../../../Common/Const/MediaConst";
import { useFavoriteSearchFilterModal } from "../../../../../Hook/VideoList/SearchArea/Filter/useFavoriteSearchFilterModal";
import { FiUpload } from "react-icons/fi";
import { FavoriteSearchCsvExport } from "./FavoriteSearchCsvExport";
import { useFavoriteSearchCsvExportModal } from "../../../../../Hook/VideoList/SearchArea/Csv/Export/useFavoriteSearchCsvExportModal";


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
            {/* 確認モーダル */}
            <ModalComponent
                modalIsOpen={isOpenModal}
                closeModal={closeModal}
                style={{
                    backgroundColor: "#181a1e",
                    borderRadius: "1%",
                    border: "solid 1px",
                    color: "white",
                    overflowY: "hidden",
                    minHeight: "350px",
                    display: "flex",
                    flexDirection: "column",
                    fontSize: isMobile ? "12px" : "15px",
                }}
                width={isMobile ? `80%` : `42%`}
                height=""
                isPositionCenter={true}
            >
                <FavoriteSearchCsvExport
                    close={closeModal}
                />
            </ModalComponent>
            {
                isOpenModal &&
                <OverlayDiv />
            }
        </React.Fragment>
    );
}