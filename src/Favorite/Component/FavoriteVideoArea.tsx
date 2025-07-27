import React from "react";
import styled from "styled-components";
import { useFavoriteVideoArea } from "../Hook/useFavoriteVideoArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import { FavoriteVideoContent } from "./FavoriteVideoContent";
import { VideoListResponseType } from "../../Home/Type/VideoListResponseType";
import { FavoriteVideoListMergedType } from "../Type/FavoriteVideoListMergedType";
import { MEDIA } from "../../Common/Const/MediaConst";

const Parent = styled.div`
  width: 100%;
  height: 90%;
`;

const VideoUl = styled.ul`
  display: grid;
  color: rgb(255, 255, 255);
  margin: 0px;
  padding: 4% 5% 0px;
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
  position: absolute;
  top: 32%;
  left: 42%;
`;


export function FavoriteVideoArea() {

  console.log("FavoriteVideoArea render");

  const {
    videoListItem,
    isLoading,
    errMessage,
    isFetching,
    isCalledListApi, } = useFavoriteVideoArea();

  // ローディング
  if (!isCalledListApi) {
    return <LoadingBase />;
  }

  if (isLoading || isFetching) {
    return <LoadingBase />;
  }

  if (errMessage) {
    return (
      <MessageDiv>
        {errMessage}
      </MessageDiv>
    );
  }

  if (!videoListItem || videoListItem.length === 0) {
    return (
      <MessageDiv>
        お気に入り動画が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      <VideoUl>
        {
          videoListItem?.map((e: FavoriteVideoListMergedType) => {
            return (
              <FavoriteVideoContent
                data={e}
                key={e.videoId}
              />
            )
          })
        }
      </VideoUl>
    </Parent>
  );
}