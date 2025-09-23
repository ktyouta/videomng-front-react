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
import { FiDownload } from "react-icons/fi";
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
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
  white-space: nowrap;
`;

/**
 * CSV出力モーダル
 */
export function FavoriteSearchCsvImportModal() {

    console.log("FavoriteSearchCsvImportModal render");

    const {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        isMobile } = useFavoriteSearchFilterModal();


    return (
        <React.Fragment>
            <FilterIconAreaDiv>
                <IconComponent
                    icon={FiDownload}
                    onclick={openFilterModal}
                    size="45%"
                />
            </FilterIconAreaDiv>
            {
                // 確認モーダル
                isOpenFilterModal &&
                <ModalComponent
                    modalIsOpen={isOpenFilterModal}
                    closeModal={closeFilterModal}
                    style={{
                        backgroundColor: "#181a1e",
                        borderRadius: "1%",
                        border: "solid 1px",
                        color: "white",
                        overflowY: "hidden",
                    }}
                    width={isMobile ? `80%` : `42%`}
                    height="47%"
                    isPositionCenter={true}
                >
                    <FavoriteSearchCsvImport
                        close={closeFilterModal}
                    />
                </ModalComponent>
            }
            {
                isOpenFilterModal &&
                <OverlayDiv />
            }
        </React.Fragment>
    );
}