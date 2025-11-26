import React from "react";
import { useFavoriteSearchArea } from "../../../hooks/videolist/searcharea/useFavoriteSearchArea";
import { FavoriteVideoFolderSearchAreaMobile } from "./FavoriteVideoFolderSearchAreaMobile";
import { FavoriteVideoFolderSearchAreaPc } from "./FavoriteVideoFolderSearchAreaPc";
import { useFavoriteVideoFolderSearchArea } from "../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchArea";

export function FavoriteSearchArea() {

    const { isPcLess } = useFavoriteVideoFolderSearchArea();

    return (
        <React.Fragment>
            {
                isPcLess
                    ?
                    // PCサイズ以下
                    <FavoriteVideoFolderSearchAreaMobile />
                    :
                    // PC
                    <FavoriteVideoFolderSearchAreaPc />
            }
        </React.Fragment>
    );
}