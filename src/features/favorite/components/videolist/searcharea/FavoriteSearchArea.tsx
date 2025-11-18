import React from "react";
import { useFavoriteSearchArea } from "../../../hooks/videolist/searcharea/useFavoriteSearchArea";
import { FavoriteSearchAreaMobile } from "./FavoriteSearchAreaMobile";
import { FavoriteSearchAreaPc } from "./FavoriteSearchAreaPc";

export function FavoriteSearchArea() {

    const { isPcLess } = useFavoriteSearchArea();

    return (
        <React.Fragment>
            {
                isPcLess
                    ?
                    // PCサイズ以下
                    <FavoriteSearchAreaMobile />
                    :
                    // PC
                    <FavoriteSearchAreaPc />
            }
        </React.Fragment>
    );
}