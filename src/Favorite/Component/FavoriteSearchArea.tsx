import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import ModalComponent from "../../Common/Component/ModalComponent";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";
import { FavoriteSearchCondition } from "./FavoriteSearchCondition";
import { useFavoriteSearchArea } from "../Hook/useFavoriteSearchArea";
import TagButtonComponent from "../../Common/Component/TagButtonComponent";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import ComboComponent from "../../Common/Component/ComboComponent";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../Common/Component/IconComponent";
import { MEDIA } from "../../Common/Const/MediaConst";

const Parent = styled.div`
  width: 100%;
  height: 10%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
`;

const ComboTitleSpan = styled.span`
  margin-right:7px;
  color: white;
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

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
`;

/**
 * 検索条件エリア
 */
export function FavoriteSearchArea() {

  console.log("FavoriteSearchArea render");

  const {
    isOpenFilterModal,
    openFilterModal,
    closeFilterModal,
    selectedFavoriteVideoTag,
    sortList,
    selectSort,
    selectedFavoriteVideoSortKey,
    isMobile } = useFavoriteSearchArea();

  return (
    <Parent>
      {
        selectedFavoriteVideoTag &&
        <TagButtonComponent
          title={selectedFavoriteVideoTag}
          btnStyle={{
            marginRight: "15px"
          }}
        />
      }
      <FlexSpaceDiv />
      {
        sortList && sortList.length > 0 &&
        <React.Fragment>
          <ComboTitleSpan>
            並べ替え：
          </ComboTitleSpan>
          <ComboComponent
            combo={sortList}
            initValue={selectedFavoriteVideoSortKey ?? sortList[0].value}
            onChange={selectSort}
            width="23%"
            height="39px"
            selectStyle={{
              "backgroundColor": "rgb(24, 26, 30)",
              "color": "white",
              "marginRight": "3%"
            }}
          />
        </React.Fragment>
      }
      <FilterIconAreaDiv>
        <IconComponent
          icon={FaFilter}
          onclick={openFilterModal}
          size="45%"
        />
      </FilterIconAreaDiv>
      {
        !isMobile &&
        <FilterTitleSpan>
          フィルター
        </FilterTitleSpan>
      }
      {
        // フィルターモーダル
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
          width="42%"
          height="65%"
          positionTop="15%"
          positionLeft="29%"
        >
          <FavoriteSearchCondition
            close={closeFilterModal}
          />
        </ModalComponent>
      }
      {
        isOpenFilterModal &&
        <OverlayDiv />
      }
    </Parent>
  );
}