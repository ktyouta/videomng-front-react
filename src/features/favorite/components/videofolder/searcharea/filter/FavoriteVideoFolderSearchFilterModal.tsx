import React from "react";
import { FaFilter } from 'react-icons/fa';
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteVideoFolderSearchFilterModal } from "../../../../hooks/videofolder/searcharea/filter/useFavoriteVideoFolderSearchFilterModal";
import { FavoriteVideoFolderSearchCondition } from "./FavoriteVideoFolderSearchCondition";


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
  &:hover {
    cursor: pointer;
  }
  white-space: nowrap;
  margin-right: 1%;
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
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchFilterModal() {

    console.log("FavoriteVideoFolderSearchFilterModal render");

    const {
        isOpenFilterModal,
        openFilterModal,
        closeFilterModal,
        isMobile } = useFavoriteVideoFolderSearchFilterModal();


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
                <FavoriteVideoFolderSearchCondition
                    close={closeFilterModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}