import React from "react";
import styled from "styled-components";
import { useHomeVideoArea } from "../Hook/useHomeVideoArea";
import LoadingBase from "../../Common/Component/LoadingBase";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { HomeVideoContent } from "./HomeVideoContent";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoListItemType } from "../Type/VideoListItemType";

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
  grid-row-gap: 38px;
`;

const MessageDiv = styled.div`
  color:white;
  position: absolute;
  top: 32%;
  left: 42%;
`;

const NextGetBtnAreaDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
  box-sizing: border-box;
  margin-top: 3%;
`;

export function HomeVideoArea() {

  console.log("HomeVideoArea render");

  const {
    videoListData,
    isLoading,
    clickShowMore,
    errMessage, } = useHomeVideoArea();

  if (!videoListData) {
    return (
      <MessageDiv>
        キーワードを入力して動画を検索
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

  // 動画リスト
  const videoListItems = videoListData.items;
  // 次データ取得用トークン
  const nextPageToken = videoListData.nextPageToken;

  if (videoListItems.length === 0) {
    return (
      <MessageDiv>
        検索結果が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      {
        isLoading &&
        <LoadingBase />
      }
      <VideoUl>
        {
          videoListItems?.map((e: VideoListItemType) => {
            return (
              <HomeVideoContent
                data={e}
                key={e.id.videoId}
              />
            )
          })
        }
      </VideoUl>
      {
        nextPageToken &&
        <NextGetBtnAreaDiv>
          <ButtonComponent
            styleTypeNumber="GRAD_GRAY"
            title={"もっと見る"}
            onclick={() => {
              clickShowMore(nextPageToken);
            }}
            style={{
              "fontSize": "0.9rem",
              "height": "7%",
            }}
          />
        </NextGetBtnAreaDiv>
      }
    </Parent>
  );
}