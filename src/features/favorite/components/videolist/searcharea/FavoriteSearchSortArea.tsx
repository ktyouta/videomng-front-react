import styled from "styled-components";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../../components/IconComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { FavoriteSearchFilterModal } from "./filter/FavoriteSearchFilterModal";
import { useFavoriteSearchSortArea } from "../../../hooks/videolist/searcharea/useFavoriteSearchSortArea";
import { Selectbox } from "../../../../../components/Selectbox";


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
                    <Selectbox
                        options={sortList}
                        value={selectedFavoriteVideoSortKey || sortList[0].value}
                        onChange={selectSort}
                        width={isMobile ? `48%` : `23%`}
                        height="39px"
                        backgroundColor="rgb(24, 26, 30)"
                        color="white"
                        fontSize={isMobile ? "12px" : "13px"}
                        outerStyle={{
                            marginRight: "2%",
                        }}
                    />
                </React.Fragment>
            }
        </React.Fragment>
    );
}