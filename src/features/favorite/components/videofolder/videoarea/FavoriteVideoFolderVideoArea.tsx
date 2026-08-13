import { DndContext } from "@dnd-kit/core";
import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import styled from "styled-components";
import Loading from "../../../../../components/Loading";
import { MEDIA } from "../../../../../consts/MediaConst";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FAVORITE_LIST_MODE } from "../../../const/FavoriteConst";
import { useFavoriteVideoFolderArea } from "../../../hooks/videofolder/videoarea/useFavoriteVideoFolderArea";
import { FavoriteVideoListMergedType } from "../../../types/FavoriteVideoListMergedType";
import { FolderType } from "../../../types/videolist/FolderType";
import { FavoriteVideoError } from "../../FavoriteVideoError";
import { FavoriteVideoFolderContent } from "../../FavoriteVideoFolderContent";
import { FavoriteVideoStatus } from "../../FavoriteVideoStatus";
import { FavoriteVideoFolderAreaFooter } from "./FavoriteVideoFolderAreaFooter";
import { FavoriteVideoFolderVideoContent } from "./FavoriteVideoFolderVideoContent";

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
  margin-top: 8px;

  @media (min-width: ${MEDIA.PC}) {
    padding-right: 5%;
  }
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

export function FavoriteVideoFolderVideoArea() {

  console.log("FavoriteVideoFolderVideoArea render");

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
    refetch, } = useFavoriteVideoFolderArea();

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
      <FavoriteVideoStatus
        icon={<FaRegFolderOpen />}
        title="このフォルダに動画がありません"
        description="動画を追加すると、ここに表示されます。"
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
            <FavoriteVideoFolderVideoContent
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
      <FavoriteVideoFolderAreaFooter />
    </Parent>
  );
}