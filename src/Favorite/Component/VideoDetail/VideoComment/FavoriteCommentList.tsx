import styled from "styled-components";
import { useFavoriteMemoList } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../VideoMemo/FavoriteMemoContent";
import LoadingBase from "../../../../Common/Component/LoadingBase";
import { useFavoriteCommentList } from "../../../Hook/VideoDetail/VideoComment/useFavoriteCommentList";
import { FavoriteCommentContent } from "./FavoriteCommentContent";
import Loading from "../../../../Common/Component/Loading";
import { FavoriteVideoCommentThreadItemType } from "../../../Type/VideoDetail/VideoComment/FavoriteVideoCommentThreadItemType";
import React from "react";


const Parent = styled.div`
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  color:white;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

const LoadingParent = styled(Parent)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommentListAreaDiv = styled.div`
  width: 99%;
  flex: 1;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-left: 1%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const LoadingParentNext = styled.div`
  position: absolute;
  top: -125%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

const NextGetAreaDiv = styled.div`
  margin-top: 55px;
  position: relative;
`;

const InfiniteScrollAreaDiv = styled.div`
  height: 60px;
  flex-shrink: 0;
`;

export function FavoriteCommentList() {

    console.log("FavoriteCommentList render");

    const {
        isLoading,
        errMessage,
        displayCommentList,
        nextPageToken,
        ref, } = useFavoriteCommentList();

    if (isLoading && !nextPageToken) {
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

    if (!displayCommentList) {
        return (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    }

    return (
        <Parent>
            {
                displayCommentList.length > 0 ?
                    <CommentListAreaDiv>
                        {
                            displayCommentList.map((e: FavoriteVideoCommentThreadItemType, index) => {

                                const key = e.id;
                                return (
                                    <React.Fragment>
                                        <FavoriteCommentContent
                                            favoriteVideoComment={e}
                                            key={`${key}-commentid`}
                                        />
                                        {
                                            // 無限スクロール
                                            index === displayCommentList.length - 1 &&
                                            nextPageToken &&
                                            <React.Fragment>
                                                {
                                                    isLoading
                                                        ?
                                                        <NextGetAreaDiv>
                                                            <LoadingParentNext>
                                                                <Loading />
                                                            </LoadingParentNext>
                                                        </NextGetAreaDiv>
                                                        :
                                                        <InfiniteScrollAreaDiv
                                                            ref={ref}
                                                        />
                                                }
                                            </React.Fragment>
                                        }
                                    </React.Fragment>
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