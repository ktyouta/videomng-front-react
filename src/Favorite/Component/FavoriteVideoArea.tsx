import React from "react";
import styled from "styled-components";
import { useFavoriteVideoArea } from "../Hook/useFavoriteVideoArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import { FavoriteVideoContent } from "./FavoriteVideoContent";
import { VideoListResponseType } from "../../Home/Type/VideoListResponseType";
import { FavoriteVideoListMergedType } from "../Type/FavoriteVideoListMergedType";

const Parent = styled.div`
  width: 100%;
  height: 90%;
`;

const VideoUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(var(--grid-container-columns), minmax(0, 1fr));
  margin-bottom: 0;
  color: #fff;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left:5%;
  padding-right:5%;
  padding-top: 4%;
  --grid-container-columns: 5;
  grid-column-gap: 4%;
  grid-row-gap: 30px;
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

  if (!videoListItem || videoListItem.length === 0) {
    return (
      <MessageDiv>
        お気に入り動画が存在しません。
      </MessageDiv>
    );
  }

  if (errMessage) {
    return (
      <MessageDiv>
        {errMessage}
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