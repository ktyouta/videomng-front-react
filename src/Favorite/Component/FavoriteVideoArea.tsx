import React from "react";
import styled from "styled-components";
import { useFavoriteVideoArea } from "../Hook/useFavoriteVideoArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { FavoriteVideoContent } from "./FavoriteVideoContent";

const Parent = styled.div`
  width: 100%;
  height: 90%;
`;

const VideoUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(var(--grid-container-columns), minmax(0, 1fr));
  gap: 4%; 
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
    isLoading } = useFavoriteVideoArea();

  // ローディング
  if (isLoading) {
    return <LoadingBase />;
  }

  if (videoListItem?.length === 0) {
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
          videoListItem?.map((e: YouTubeDataApiVideoListItemType) => {
            return (
              <FavoriteVideoContent
                data={e}
                key={crypto.randomUUID()}
              />
            )
          })
        }
      </VideoUl>
    </Parent>
  );
}