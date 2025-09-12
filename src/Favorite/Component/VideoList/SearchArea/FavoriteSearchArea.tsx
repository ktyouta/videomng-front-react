import React from "react";
import { useFavoriteSearchArea } from "../../../Hook/VideoList/SearchArea/useFavoriteSearchArea";
import { FavoriteSearchAreaMobile } from "./FavoriteSearchAreaMobile";
import { FavoriteSearchAreaPc } from "./FavoriteSearchAreaPc";

export function FavoriteSearchArea() {

    const { isMobile } = useFavoriteSearchArea();

    return (
        <React.Fragment>
            {
                isMobile
                    ?
                    // モバイル
                    <FavoriteSearchAreaMobile />
                    :
                    // PC
                    <FavoriteSearchAreaPc />
            }
        </React.Fragment>
    );
}