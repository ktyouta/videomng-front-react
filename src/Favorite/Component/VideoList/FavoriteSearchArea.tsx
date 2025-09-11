import React from "react";
import { useFavoriteSearchArea } from "../../Hook/VideoList/useFavoriteSearchArea";
import { FavoriteSearchAreaMobile } from "./FavoriteSearchAreaMobile";
import { FavoriteSearchAreaPc } from "./FavoriteSearchAreaPc";

export function FavoriteSearchArea() {

    const { isMobile } = useFavoriteSearchArea();

    return (
        <React.Fragment>
            {
                isMobile
                    ?
                    <FavoriteSearchAreaMobile />
                    :
                    <FavoriteSearchAreaPc />
            }
        </React.Fragment>
    );
}