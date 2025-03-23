import React from "react";
import styled from "styled-components";
import { HomeMetaInfo } from "./HomeMetaInfo";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";


const MenuParentDiv = styled.div`
  width: 75%;
  margin-left: 2%;
  box-sizing:border-box;
  padding-top: 1%;
  padding-left: 3%;
`;


type propsType = {
  videoDetail: YouTubeDataApiVideoDetailItemType | undefined,
  videoId: string
}


export function HomeVideoDetailMenu(props: propsType) {

  console.log("HomeVideoDetailMenu render");

  const videoDetail = props.videoDetail;
  // 動画ID
  const videoId = props.videoId;

  return (
    <React.Fragment>
      <MenuParentDiv>
        <HomeMetaInfo
          videoId={videoId}
          videoDetail={videoDetail}
        />
      </MenuParentDiv>
    </React.Fragment>
  );
}