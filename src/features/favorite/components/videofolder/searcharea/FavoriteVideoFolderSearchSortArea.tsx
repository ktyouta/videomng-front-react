import React from "react";
import { Selectbox } from "../../../../../components/Selectbox";
import {
    FAVORITE_SEARCH_AREA_BUTTON_BG
} from "../../../const/FavoriteConst";
import { useFavoriteVideoFolderSearchSortArea } from "../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchSortArea";


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
                <Selectbox
                    options={sortList}
                    value={selectedFavoriteVideoSortKey || sortList[0].value}
                    onChange={selectSort}
                    width={isMobile ? `100%` : `23%`}
                    height="39px"
                    backgroundColor={FAVORITE_SEARCH_AREA_BUTTON_BG}
                    color="white"
                    borderColor="transparent"
                    fontSize={isMobile ? "12px" : "13px"}
                    borderRadius="10px"
                />
            }
        </React.Fragment>
    );
}