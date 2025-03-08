import React from "react";
import styled from "styled-components";
import { useHomeVideoArea } from "../Hook/useHomeVideoArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { HomeVideoContent } from "./HomeVideoContent";

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


export function HomeVideoArea() {

  console.log("HomeVideoArea render");

  const {
    videoListItem,
    isLoading } = useHomeVideoArea();

  // ローディング
  if (isLoading) {
    return <LoadingBase />;
  }

  if (!videoListItem) {
    return (
      <MessageDiv>
        キーワードを入力して動画を検索
      </MessageDiv>
    );
  }

  if (videoListItem?.length === 0) {
    return (
      <MessageDiv>
        検索結果が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      <VideoUl>
        {
          videoListItem?.map((e: YouTubeDataApiVideoListItemType) => {
            return (
              <HomeVideoContent
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