import { DndContext } from "@dnd-kit/core";
import React from "react";
import styled from "styled-components";
import Loading from "../../../../../components/Loading";
import { MEDIA } from "../../../../../consts/MediaConst";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FAVORITE_LIST_MODE } from "../../../const/FavoriteConst";
import { useFavoriteVideoArea } from "../../../hooks/videolist/videoarea/useFavoriteVideoArea";
import { FavoriteVideoListMergedType } from "../../../types/FavoriteVideoListMergedType";
import { FolderType } from "../../../types/videolist/FolderType";
import { FavoriteVideoFolderContent } from "../../FavoriteVideoFolderContent";
import { FavoriteVideoAreaFooter } from "./FavoriteVideoAreaFooter";
import { FavoriteVideoContent } from "./FavoriteVideoContent";
import { FavoriteVideoEmpty } from "./FavoriteVideoEmpty";
import { FavoriteVideoError } from "../../FavoriteVideoError";

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

export function FavoriteVideoArea() {

  console.log("FavoriteVideoArea render");

  const {
    displayVideoList,
    isLoading,
    isError,
    isFetching,
    total,
    displayFolderList,
    handleDragEnd,
    dragSensors,
    selectedFavoriteVideoMode,
    isUnregistered,
    refetch, } = useFavoriteVideoArea();

  if (isLoading || isFetching) {
    return (
      <LoadingParent>
        <Loading />
      </LoadingParent>
    );
  }

  if (isError) {
    return (
      <FavoriteVideoError
        onReload={refetch}
      />
    );
  }

  if ((!displayVideoList || displayVideoList.length === 0) && (!displayFolderList || displayFolderList.length === 0)) {
    return (
      <FavoriteVideoEmpty
        isUnregistered={isUnregistered}
      />
    );
  }

  const videoContent = (
    <React.Fragment>
      {
        displayFolderList.map((e: FolderType) => {
          return (
            <FavoriteVideoFolderContent
              data={e}
              key={e.folderId}
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
    </React.Fragment>
  );

  return (
    <Parent>
      <ResultNumDiv>
        <FlexSpaceDiv />
        <ResultNumSpan>
          全{total}件
        </ResultNumSpan>
      </ResultNumDiv>
      <VideoUl>
        {
          selectedFavoriteVideoMode === FAVORITE_LIST_MODE.folder.value
            ?
            <DndContext
              onDragEnd={handleDragEnd}
              sensors={dragSensors}
            >
              {videoContent}
            </DndContext>
            :
            <React.Fragment>
              {videoContent}
            </React.Fragment>
        }
      </VideoUl>
      <FavoriteVideoAreaFooter />
    </Parent>
  );
}