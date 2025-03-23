import React from "react";
import { useHomeVideoDetail } from "../Hook/useHomeVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { HomeVideoDetailInfo } from "./HomeVideoDetailInfo";
import { HomeVideoDetailMenu } from "./HomeVideoDetailMenu";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
`;

const VideoContentDiv = styled.div`
  width: 100%;
  height: 52%;
  display:flex;
  box-sizing:border-box;
  padding-left:9%;
  padding-right:5%;
`;


export function HomeVideoDetail() {

  console.log("HomeVideoDetail render");

  const {
    videoId,
    isLoading,
    videoDetail } = useHomeVideoDetail();

  // ローディング
  if (isLoading) {
    return <LoadingBase />;
  }

  return (
    <Parent>
      <VideoContentDiv>
        {/* 動画情報 */}
        <HomeVideoDetailInfo
          videoDetail={videoDetail}
          videoId={videoId}
        />
        {/* メニュー */}
        <HomeVideoDetailMenu
          videoDetail={videoDetail}
          videoId={videoId}
        />
      </VideoContentDiv>
    </Parent>
  );
}