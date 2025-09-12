import styled from "styled-components";
import ButtonComponent from "../../../../Common/Component/ButtonComponent";
import ModalComponent from "../../../../Common/Component/ModalComponent";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";
import { FavoriteSearchCondition } from "./FavoriteSearchCondition";
import TagButtonComponent from "../../../../Common/Component/TagButtonComponent";
import { FlexSpaceDiv } from "../../../../Common/StyledComponent/FlexSpaceDiv";
import ComboComponent from "../../../../Common/Component/ComboComponent";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import { FavoriteSearchFilterModal } from "./FavoriteSearchFilterModal";
import { FavoriteSearchSortArea } from "./FavoriteSearchSortArea";
import { useFavoriteSearchSelectedTag } from "../../../Hook/VideoList/SearchArea/useFavoriteSearchSelectedTag";

const Parent = styled.div`
  width: 100%;
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


/**
 * 検索条件エリア
 */
export function FavoriteSearchSelectedTag() {

    console.log("FavoriteSearchSelectedTag render");

    const { selectedFavoriteVideoTag } = useFavoriteSearchSelectedTag();

    return (
        <React.Fragment>
            {
                // 選択中のタグ
                selectedFavoriteVideoTag &&
                <TagButtonComponent
                    title={selectedFavoriteVideoTag}
                    btnStyle={{
                        marginRight: "15px"
                    }}
                />
            }
        </React.Fragment>
    );
}