import React from "react";
import { Selectbox } from "../../../../../components/Selectbox";
import {
    FAVORITE_SEARCH_AREA_BUTTON_BG
} from "../../../const/FavoriteConst";
import { useFavoriteSearchSortArea } from "../../../hooks/videolist/searcharea/useFavoriteSearchSortArea";


/**
 * 検索条件エリア
 */
export function FavoriteSearchSortArea() {

    console.log("FavoriteSearchSortArea render");

    const {
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey,
        isPcLess, } = useFavoriteSearchSortArea();

    return (
        <React.Fragment>
            {
                sortList && sortList.length > 0 &&
                <Selectbox
                    options={sortList}
                    value={selectedFavoriteVideoSortKey || sortList[0].value}
                    onChange={selectSort}
                    width={isPcLess ? `100%` : `23%`}
                    height="39px"
                    backgroundColor={FAVORITE_SEARCH_AREA_BUTTON_BG}
                    borderColor="transparent"
                    color="white"
                    fontSize={isPcLess ? "12px" : "13px"}
                    borderRadius="10px"
                    isSearchable={!isPcLess}
                />
            }
        </React.Fragment>
    );
}