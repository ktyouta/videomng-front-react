import React from "react";
import { useFavoriteSearchArea } from "../../../hooks/videolist/searcharea/useFavoriteSearchArea";
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