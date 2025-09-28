import styled from "styled-components";
import { FavoriteSearchCondition } from "./FavoriteSearchCondition";
import TagButtonComponent from "../../../../../Common/Component/TagButtonComponent";
import { FlexSpaceDiv } from "../../../../../Common/StyledComponent/FlexSpaceDiv";
import ComboComponent from "../../../../../Common/Component/ComboComponent";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../../Common/Component/IconComponent";
import { MEDIA } from "../../../../../Common/Const/MediaConst";
import { useFavoriteSearchFilterModal } from "../../../../Hook/VideoList/SearchArea/Filter/useFavoriteSearchFilterModal";
import { ModalPortal } from "../../../../../Common/Component/ModalPortal";


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
  margin-right: 3%;
`;

/**
 * 検索条件エリア
 */
export function FavoriteSearchFilterModal() {

    console.log("FavoriteSearchFilterModal render");

    const {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        isMobile } = useFavoriteSearchFilterModal();


    return (
        <React.Fragment>
            <FilterIconAreaDiv>
                <IconComponent
                    icon={FaFilter}
                    onclick={openFilterModal}
                    size="40%"
                />
            </FilterIconAreaDiv>
            {
                !isMobile &&
                <FilterTitleSpan
                    onClick={openFilterModal}
                >
                    フィルター
                </FilterTitleSpan>
            }
            {/* フィルターモーダル */}
            <ModalPortal
                isOpen={isOpenFilterModal}
                modalWidth={isMobile ? `80%` : `45%`}
                modalHeight="70%"
            >
                <FavoriteSearchCondition
                    close={closeFilterModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}