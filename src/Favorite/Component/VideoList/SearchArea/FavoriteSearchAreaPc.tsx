import styled from "styled-components";
import ButtonComponent from "../../../../Common/Component/ButtonComponent";
import ModalComponent from "../../../../Common/Component/ModalComponent";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";
import { FavoriteSearchCondition } from "./Filter/FavoriteSearchCondition";
import TagButtonComponent from "../../../../Common/Component/TagButtonComponent";
import { FlexSpaceDiv } from "../../../../Common/StyledComponent/FlexSpaceDiv";
import ComboComponent from "../../../../Common/Component/ComboComponent";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import { FavoriteSearchFilterModal } from "./Filter/FavoriteSearchFilterModal";
import { FavoriteSearchSortArea } from "./FavoriteSearchSortArea";
import { FavoriteSearchSelectedTag } from "./FavoriteSearchSelectedTag";
import { FavoriteSearchText } from "./FavoriteSearchText";

const Parent = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
`;

const SearchParentDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
  margin-top:1%;
`;


/**
 * 検索条件エリア
 */
export function FavoriteSearchAreaPc() {

  console.log("FavoriteSearchArea render");

  return (
    <React.Fragment>
      <Parent>
        <FlexSpaceDiv />
        {/* タイトルフィルター */}
        <FavoriteSearchText
          width="90%"
        />
        {/* 並び替えリスト */}
        <FavoriteSearchSortArea />
        {/* フィルター用モーダル */}
        <FavoriteSearchFilterModal />
      </Parent>
      <SearchParentDiv>
        {/* 選択中のタグ */}
        <FavoriteSearchSelectedTag />
      </SearchParentDiv>
    </React.Fragment>
  );
}