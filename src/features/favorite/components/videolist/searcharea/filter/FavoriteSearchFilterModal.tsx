import React from "react";
import { FaFilter } from 'react-icons/fa';
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { useFavoriteSearchFilterModal } from "../../../../hooks/videolist/searcharea/filter/useFavoriteSearchFilterModal";
import { FavoriteSearchCondition } from "./FavoriteSearchCondition";


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
  margin-right: 1%;
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
            <FilterTitleSpan
                onClick={openFilterModal}
            >
                フィルター
            </FilterTitleSpan>
            {/* フィルターモーダル */}
            <ModalPortal
                isOpen={isOpenFilterModal}
                modalWidth={isMobile ? `80%` : `45%`}
                modalHeight="70%"
                isCloseOuter={true}
                close={closeFilterModal}
            >
                <FavoriteSearchCondition
                    close={closeFilterModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}