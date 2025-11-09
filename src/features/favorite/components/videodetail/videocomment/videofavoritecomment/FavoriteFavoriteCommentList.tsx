import styled from "styled-components";
import { useFavoriteMemoList } from "../../../../hooks/videodetail/videomemo/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../../../../types/videodetail/videomemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../../videomemo/FavoriteMemoContent";
import LoadingBase from "../../../../../../components/LoadingBase";
import { useFavoriteCommentList } from "../../../../hooks/videodetail/videocomment/useFavoriteCommentList";
import { FavoriteCommentContent } from "../FavoriteCommentContent";
import { useFavoriteBlockCommentList } from "../../../../hooks/videodetail/videocomment/videoblockcomment/useFavoriteBlockCommentList";
import { YouTubeDataApiCommentDetailItemType } from "../../../../types/videodetail/videocomment/YouTubeDataApiCommentDetailItemType";
import { FavoriteBlockCommentContent } from "../videoblockcomment/FavoriteBlockCommentContent";
import React from "react";
import { useFavoriteFavoriteCommentList } from "../../../../hooks/videodetail/videocomment/videofavoritecomment/useFavoriteFavoriteCommentList";
import { FavoriteFavoriteCommentContent } from "./FavoriteFavoriteCommentContent";
import Loading from "../../../../../../components/Loading";


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

export function FavoriteFavoriteCommentList() {

    console.log("FavoriteFavoriteCommentList render");

    const {
        isLoading,
        errMessage,
        favoriteCommentData, } = useFavoriteFavoriteCommentList();

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
                favoriteCommentData && favoriteCommentData.items.length > 0 ?
                    <CommentListAreaDiv>
                        {
                            favoriteCommentData.items.map((e: YouTubeDataApiCommentDetailItemType) => {

                                const commentId = e.id

                                return (
                                    <FavoriteFavoriteCommentContent
                                        commentDetailItem={e}
                                        key={`${commentId}-favoritecommentid`}
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