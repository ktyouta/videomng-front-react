import styled from "styled-components";
import { useFavoriteMemoList } from "../../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../../VideoMemo/FavoriteMemoContent";
import LoadingBase from "../../../../../Common/Component/LoadingBase";
import { useFavoriteCommentList } from "../../../../Hook/VideoDetail/VideoComment/useFavoriteCommentList";
import { FavoriteCommentContent } from "../FavoriteCommentContent";
import { useFavoriteBlockCommentList } from "../../../../Hook/VideoDetail/VideoComment/VideoBlockComment/useFavoriteBlockCommentList";
import { YouTubeDataApiCommentDetailItemType } from "../../../../Type/VideoDetail/VideoComment/YouTubeDataApiCommentDetailItemType";
import { FavoriteBlockCommentContent } from "./FavoriteBlockCommentContent";
import React from "react";
import Loading from "../../../../../Common/Component/Loading";


const Parent = styled.div`
  width: 100%;
  height: 96%;
  box-sizing: border-box;
  padding-left: 2%;
  color:white;
  padding-top: 2%;
`;

const LoadingParent = styled(Parent)`
    display: flex;
    align-items: center;
    justify-content: center;
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
            <LoadingParent>
                <Loading />
            </LoadingParent>
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
                blockCommentData && blockCommentData.items.length > 0 ?
                    <CommentListAreaDiv>
                        {
                            blockCommentData.items.map((e: YouTubeDataApiCommentDetailItemType) => {

                                const commentId = e.id;

                                return (
                                    <FavoriteBlockCommentContent
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