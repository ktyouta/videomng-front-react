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
import { useFavoriteSearchSortArea } from "../../../Hook/VideoList/SearchArea/useFavoriteSearchSortArea";


const ComboTitleSpan = styled.span`
  margin-right:7px;
  color: white;
  font-size: 12px;
  white-space: nowrap;

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
export function FavoriteSearchSortArea() {

    console.log("FavoriteSearchSortArea render");

    const {
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey,
        isMobile, } = useFavoriteSearchSortArea();

    return (
        <React.Fragment>
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
                        width={isMobile ? `60%` : `23%`}
                        height="39px"
                        selectStyle={{
                            "backgroundColor": "rgb(24, 26, 30)",
                            "color": "white",
                            "marginRight": "3%"
                        }}
                    />
                </React.Fragment>
            }
        </React.Fragment>
    );
}