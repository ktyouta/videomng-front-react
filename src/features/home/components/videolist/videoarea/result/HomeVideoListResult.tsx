import styled from "styled-components";
import { useHomeVideoListResult } from "../../../../hooks/videolist/videoarea/result/useHomeVideoListResult";
import { VideoListDataType } from "../../../../types/videolist/VideoListDataType";
import { nowSearchConditionType } from "../../../HomeVideoNowSearchConditionValueProvider";
import React from "react";
import { FAVORITE_KEYWORD_MAX } from "../../../../const/HomeConst";
import { VideoListItemType } from "../../../../types/videolist/VideoListItemType";
import { HomeVideoContent } from "./HomeVideoContent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { IconComponent } from "../../../../../../components/IconComponent";
import Loading from "../../../../../../components/Loading";


const LoadingParentNext = styled.div`
  position: absolute;
  top: -125%;
  left: 50%;
  transform: translate(-50%, -50%); 
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
  box-sizing: border-box;

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

const NextGetAreaDiv = styled.div`
  margin-top: 55px;
  position: relative;
`;

const InfiniteScrollAreaDiv = styled.div`
  heigth: 50px;
`;

type propsType = {
  videoListData: VideoListDataType,
  isLoading: boolean
}

export function HomeVideoListResult(props: propsType) {

  console.log("HomeVideoListResult render");

  const { ref } = useHomeVideoListResult({ ...props });

  // 動画リスト
  const videoListItems = props.videoListData.items;
  // 次データ取得用トークン
  const nextPageToken = props.videoListData.nextPageToken;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}