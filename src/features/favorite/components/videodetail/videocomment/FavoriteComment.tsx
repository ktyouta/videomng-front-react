import React from "react";
import { FavoriteCommentHeader } from "./FavoriteCommentHeader";
import { FavoriteCommentList } from "./FavoriteCommentList";


export function FavoriteComment() {

    console.log("FavoriteComment render");

    return (
        <React.Fragment>
            {/* コメントヘッダ */}
            <FavoriteCommentHeader />
            {/* コメントリスト */}
            <FavoriteCommentList />
        </React.Fragment>
    );
}