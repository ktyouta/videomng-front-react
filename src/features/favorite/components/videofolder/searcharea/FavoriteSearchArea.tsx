import React from "react";
import { useFavoriteSearchArea } from "../../../hooks/videolist/searcharea/useFavoriteSearchArea";
import { FavoriteVideoFolderSearchAreaMobile } from "./FavoriteVideoFolderSearchAreaMobile";
import { FavoriteVideoFolderSearchAreaPc } from "./FavoriteVideoFolderSearchAreaPc";
import { useFavoriteVideoFolderSearchArea } from "../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchArea";

export function FavoriteSearchArea() {

    const { isPcLess, data } = useFavoriteVideoFolderSearchArea();

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