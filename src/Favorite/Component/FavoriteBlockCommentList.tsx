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


const Parent = styled.div`
  width: 100%;
  height: 96%;
  box-sizing: border-box;
  padding-left: 2%;
  color:white;
  padding-top: 1%;
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


export function FavoriteBlockCommentList() {

    console.log("FavoriteBlockCommentList render");

    const {
        isLoading,
        errMessage,
        blockCommentData, } = useFavoriteBlockCommentList();

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

    const blockCommentList = blockCommentData?.items;

    return (
        <Parent>
            {
                blockCommentList ?
                    blockCommentList.length > 0 ?
                        <CommentListAreaDiv>
                            {
                                blockCommentList.map((e: YouTubeDataApiCommentDetailItemType) => {
                                    return (
                                        <FavoriteBlockCommentContent
                                            commentDetailItem={e}
                                        />
                                    )
                                })
                            }
                        </CommentListAreaDiv>
                        :
                        `コメントが存在しません。`
                    :
                    <React.Fragment />
            }
        </Parent>
    );
}