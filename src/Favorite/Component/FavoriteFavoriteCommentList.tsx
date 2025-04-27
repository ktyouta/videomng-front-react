import styled from "styled-components";
import { useFavoriteMemoList } from "../Hook/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import LoadingBase from "../../Common/Component/LoadingBase";
import { useFavoriteCommentList } from "../Hook/useFavoriteCommentList";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FavoriteCommentContent } from "./FavoriteCommentContent";
import { useFavoriteBlockCommentList } from "../Hook/useFavoriteBlockCommentList";
import { YouTubeDataApiCommentDetailItemType } from "../Type/YouTubeDataApiCommentDetailItemType";
import { FavoriteBlockCommentContent } from "./FavoriteBlockCommentContent";
import React from "react";
import { useFavoriteFavoriteCommentList } from "../Hook/useFavoriteFavoriteCommentList";
import { FavoriteFavoriteCommentContent } from "./FavoriteFavoriteCommentContent";


const Parent = styled.div`
  width: 100%;
  height: 96%;
  box-sizing: border-box;
  padding-left: 2%;
  color:white;
  padding-top: 2%;
`;

const CommentListAreaDiv = styled.div`
  width: 97%;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-left: 1%;
  padding-right: 1%;
`;


export function FavoriteFavoriteCommentList() {

    console.log("FavoriteFavoriteCommentList render");

    const {
        isLoading,
        errMessage,
        favoriteCommentData, } = useFavoriteFavoriteCommentList();

    if (isLoading) {
        return (
            <Parent>
                <LoadingBase />
            </Parent>
        );
    }

    if (errMessage) {
        return (
            <Parent>
                {errMessage}
            </Parent>
        );
    }

    return (
        <Parent>
            {
                favoriteCommentData && favoriteCommentData.items.length > 0 ?
                    <CommentListAreaDiv>
                        {
                            favoriteCommentData.items.map((e: YouTubeDataApiCommentDetailItemType) => {

                                const commentId = e.id

                                return (
                                    <FavoriteFavoriteCommentContent
                                        commentDetailItem={e}
                                        key={commentId}
                                    />
                                )
                            })
                        }
                    </CommentListAreaDiv>
                    :
                    `コメントが存在しません。`
            }
        </Parent>
    );
}