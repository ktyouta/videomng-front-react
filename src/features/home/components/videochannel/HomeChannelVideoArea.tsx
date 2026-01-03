import React from "react";
import styled from "styled-components";
import Loading from "../../../../components/Loading";
import { MEDIA } from "../../../../consts/MediaConst";
import { VideoListDataType } from "../../../../types/videolist/VideoListDataType";
import { VideoListItemType } from "../../../../types/videolist/VideoListItemType";
import { useHomeChannelVideoArea } from "../../hooks/videochannel/useHomeChannelVideoArea";
import { HomeChannelVideoContent } from "./HomeChannelVideoContent";

const Parent = styled.div`
  width: 100%;
  height: 90%;
`;

const VideoUl = styled.ul`
  display: grid;
  color: rgb(255, 255, 255);
  margin: 0px;
  padding: 2% 5% 0px;
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

const NextGetBtnAreaDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
  box-sizing: border-box;
  margin-top: 3%;
  position: relative;
`;

const NextGetAreaDiv = styled.div`
  margin-top: 55px;
  position: relative;
`;

const InfiniteScrollAreaDiv = styled.div`
  heigth: 50px;
`;

const LoadingParentNext = styled.div`
  position: absolute;
  top: -125%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

type propsType = {
  videoListData: VideoListDataType,
  setNextPageToken: React.Dispatch<React.SetStateAction<string>>,
  isLoading: boolean,
}


export function HomeChannelVideoArea(props: propsType) {

  console.log("HomeChannelVideoArea render");

  const { ref } = useHomeChannelVideoArea({ ...props });

  // 動画リスト
  const videoListItems = props.videoListData.items;
  // 次データ取得用トークン
  const nextPageToken = props.videoListData.nextPageToken;

  if (videoListItems.length === 0) {
    return (
      <MessageDiv>
        動画が存在しません。
      </MessageDiv>
    );
  }

  return (
    <Parent>
      <VideoUl>
        {
          videoListItems?.map((e: VideoListItemType) => {
            return (
              <HomeChannelVideoContent
                data={e}
                key={e.id.videoId}
              />
            )
          })
        }
      </VideoUl>
      {
        // 無限スクロール
        nextPageToken &&
        <React.Fragment>
          {
            props.isLoading
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
    </Parent>
  );
}