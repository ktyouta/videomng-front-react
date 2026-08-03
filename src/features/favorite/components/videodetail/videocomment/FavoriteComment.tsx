import React from "react";
import styled from "styled-components";
import Loading from "../../../../../components/Loading";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteCommentList } from "../../../hooks/videodetail/videocomment/useFavoriteCommentList";
import { FavoriteVideoCommentThreadItemType } from "../../../types/videodetail/videocomment/FavoriteVideoCommentThreadItemType";
import { FavoriteCommentContent } from "./FavoriteCommentContent";
import { FavoriteBlockCommentModalIcon } from "./videoblockcomment/FavoriteBlockCommentModalIcon";
import { FavoriteFavoriteCommentModalIcon } from "./videofavoritecomment/FavoriteFavoriteCommentModalIcon";


const RelativeDiv = styled.div`
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
`;

const IconOverlayDiv = styled.div`
  position: absolute;
  top: -3px;
  right: -10px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Parent = styled.div`
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  color:white;
  padding-top: 17px;
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
  padding-right: 7px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 11px;
  
  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    padding-right: 20px;
    font-size: 12px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    padding-right: 20px;
    font-size: 12px;
  }

  @media (min-width: ${MEDIA.PC}) {
    padding-right: 20px;
    font-size: 16px;
  }
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

export function FavoriteComment() {

    console.log("FavoriteComment render");

    const {
        isLoading,
        errMessage,
        displayCommentList,
        nextPageToken,
        ref, } = useFavoriteCommentList();

    let bodyContent: React.ReactNode;

    if (isLoading && !nextPageToken) {
        bodyContent = (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    } else if (errMessage) {
        bodyContent = (
            <Parent>
                {errMessage}
            </Parent>
        );
    } else if (!displayCommentList) {
        bodyContent = (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    } else {
        bodyContent = (
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

    return (
        <RelativeDiv>
            {/* お気に入りコメントリスト・非表示コメントリストの切り替えアイコン */}
            <IconOverlayDiv>
                <FavoriteFavoriteCommentModalIcon />
                <FavoriteBlockCommentModalIcon />
            </IconOverlayDiv>
            {bodyContent}
        </RelativeDiv>
    );
}
