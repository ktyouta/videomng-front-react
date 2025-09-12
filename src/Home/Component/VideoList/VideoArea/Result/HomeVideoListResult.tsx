import styled from "styled-components";
import { useHomeVideoListResult } from "../../../../Hook/VideoList/VideoArea/Result/useHomeVideoListResult";
import { VideoListDataType } from "../../../../Type/VideoList/VideoListDataType";
import { nowSearchConditionType } from "../../../HomeVideoNowSearchConditionValueProvider";
import React from "react";
import { FAVORITE_KEYWORD_MAX } from "../../../../Const/HomeConst";
import { VideoListItemType } from "../../../../Type/VideoList/VideoListItemType";
import { HomeVideoContent } from "./HomeVideoContent";
import { MEDIA } from "../../../../../Common/Const/MediaConst";
import { IconComponent } from "../../../../../Common/Component/IconComponent";
import Loading from "../../../../../Common/Component/Loading";
import ButtonComponent from "../../../../../Common/Component/ButtonComponent";
import { FaCheck } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";


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

const NextGetBtnAreaDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%;
  box-sizing: border-box;
  margin-top: 3%;
  position: relative;
`;

type propsType = {
  videoListData: VideoListDataType,
  isLoading: boolean
}

export function HomeVideoListResult(props: propsType) {

  console.log("HomeVideoListResult render");

  const {
    isMobile,
    clickShowMore } = useHomeVideoListResult();

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
        nextPageToken &&
        <NextGetBtnAreaDiv>
          {
            props.isLoading &&
            <LoadingParentNext>
              <Loading />
            </LoadingParentNext>
          }
          <ButtonComponent
            styleTypeNumber="GRAD_GRAY"
            title={"もっと見る"}
            onclick={() => {
              clickShowMore(nextPageToken);
            }}
            style={{
              fontSize: isMobile ? "12px" : "13px",
              width: isMobile ? "82px" : "100px",
              minWidth: "82px",
              height: "36px",
              boxShadow: "none",
              background: "rgb(41, 50, 60)"
            }}
          />
        </NextGetBtnAreaDiv>
      }
    </React.Fragment>
  );
}