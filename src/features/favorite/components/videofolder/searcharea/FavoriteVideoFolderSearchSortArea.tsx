import React from "react";
import styled from "styled-components";
import { Selectbox } from "../../../../../components/Selectbox";
import { MEDIA } from "../../../../../consts/MediaConst";
import {
    FAVORITE_SEARCH_AREA_BUTTON_BG,
    FAVORITE_SEARCH_AREA_LABEL_COLOR,
} from "../../../const/FavoriteConst";
import { useFavoriteVideoFolderSearchSortArea } from "../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchSortArea";


const ComboTitleSpan = styled.span`
  margin-right:7px;
  color: ${FAVORITE_SEARCH_AREA_LABEL_COLOR};
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
export function FavoriteVideoFolderSearchSortArea() {

    console.log("FavoriteVideoFolderSearchSortArea render");

    const {
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey,
        isMobile, } = useFavoriteVideoFolderSearchSortArea();

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
                        width={isMobile ? `75%` : `23%`}
                        height="39px"
                        backgroundColor={FAVORITE_SEARCH_AREA_BUTTON_BG}
                        color="white"
                        fontSize={isMobile ? "12px" : "13px"}
                        outerStyle={{
                            marginRight: "2%",
                        }}
                        borderRadius="10px"
                    />
                </React.Fragment>
            }
        </React.Fragment>
    );
}