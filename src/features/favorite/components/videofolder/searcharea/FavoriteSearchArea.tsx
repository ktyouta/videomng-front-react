import React from "react";
import { useFavoriteSearchArea } from "../../../hooks/videolist/searcharea/useFavoriteSearchArea";
import { FavoriteVideoFolderSearchAreaMobile } from "./FavoriteVideoFolderSearchAreaMobile";
import { FavoriteVideoFolderSearchAreaPc } from "./FavoriteVideoFolderSearchAreaPc";
import { useFavoriteVideoSearchArea } from "../../../hooks/videofolder/searcharea/useFavoriteVideoSearchArea";

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