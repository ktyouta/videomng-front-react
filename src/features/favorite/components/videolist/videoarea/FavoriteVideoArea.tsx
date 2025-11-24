import React from "react";
import styled from "styled-components";
import { useFavoriteVideoArea } from "../../../hooks/videolist/videoarea/useFavoriteVideoArea";
import LoadingBase from "../../../../../components/LoadingBase";
import { FavoriteVideoContent } from "./FavoriteVideoContent";
import { VideoListResponseType } from "../../../../home/types/videolist/VideoListResponseType";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { MEDIA } from "../../../../../consts/MediaConst";
import Loading from "../../../../../components/Loading";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FavoriteVideoAreaFooter } from "./FavoriteVideoAreaFooter";
import { FavoriteVideoFolder } from "./FavoriteVideoFolder";
import { FolderType } from "../../../types/videolist/FolderType";
import { DndContext } from "@dnd-kit/core";

const Parent = styled.div`
  width: 100%;
`;

const LoadingParent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

const ResultNumDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 6%;
  color: rgb(158, 158, 158);
  margin-top: 13px;
`;

const ResultNumSpan = styled.span`
`;

const VideoUl = styled.ul`
  display: grid;
  color: rgb(255, 255, 255);
  margin: 0px;
  padding: 1% 5% 0px;
  width: 100%;
  box-sizing: border-box;
  gap: 38px 4%;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (min-width: ${MEDIA.PC}) {
    grid-template-columns: repeat(auto-fill, minmax(228px, 1fr));
  }
`;

const MessageDiv = styled.div`
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 5%;
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 15px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 17px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 17px;
  }
`;

export function FavoriteVideoArea() {

  console.log("FavoriteVideoArea render");

  const {
    displayVideoList,
    isLoading,
    isError,
    isFetching,
    total,
    displayFolderList,
    handleDragEnd, } = useFavoriteVideoArea();

  if (isLoading || isFetching) {
    return (
      <LoadingParent>
        <Loading />
      </LoadingParent>
    );
  }

  if (isError) {
    return (
      <MessageDiv>
        お気に入り動画の取得に失敗しました
      </MessageDiv>
    );
  }

  if ((!displayVideoList || displayVideoList.length === 0) && (!displayFolderList || displayFolderList.length === 0)) {
    return (
      <MessageDiv>
        お気に入り動画が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      <ResultNumDiv>
        <FlexSpaceDiv />
        <ResultNumSpan>
          全{total}件
        </ResultNumSpan>
      </ResultNumDiv>
      <VideoUl>
        <DndContext
          onDragEnd={handleDragEnd}
        >
          {
            displayFolderList.map((e: FolderType) => {
              return (
                <FavoriteVideoFolder
                  data={e}
                />
              )
            })
          }
          {
            displayVideoList.map((e: FavoriteVideoListMergedType) => {
              return (
                <FavoriteVideoContent
                  data={e}
                  key={e.videoId}
                />
              )
            })
          }
        </DndContext>
      </VideoUl>
      <FavoriteVideoAreaFooter />
    </Parent>
  );
}