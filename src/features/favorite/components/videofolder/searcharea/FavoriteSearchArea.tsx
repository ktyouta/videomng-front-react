import React from "react";
import { useFavoriteVideoSearchArea } from "../../../hooks/videofolder/searcharea/useFavoriteVideoSearchArea";
import { FavoriteVideoFolderSearchAreaMobile } from "./FavoriteVideoFolderSearchAreaMobile";
import { FavoriteVideoFolderSearchAreaPc } from "./FavoriteVideoFolderSearchAreaPc";

export function FavoriteSearchArea() {

    const { isPcLess, data } = useFavoriteVideoSearchArea();

    return (
        <React.Fragment>
            {
                isPcLess
                    ?
                    // PCサイズ以下
                    <FavoriteVideoFolderSearchAreaMobile
                        folder={data}
                    />
                    :
                    // PC
                    <FavoriteVideoFolderSearchAreaPc
                        folder={data}
                    />
            }
        </React.Fragment>
    );
}