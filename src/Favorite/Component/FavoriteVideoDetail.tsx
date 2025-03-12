import React from "react";
import { useFavoriteVideoDetail } from "../Hook/useFavoriteVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { FavoriteVideoDetailInfo } from "./FavoriteVideoDetailInfo";
import { FavoriteVideoDetailMenu } from "./FavoriteVideoDetailMenu";


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


export function FavoriteVideoDetail() {

  console.log("FavoriteVideoDetail render");

  const {
    videoId,
    isLoading,
    videoDetail } = useFavoriteVideoDetail();

  // ローディング
  if (isLoading) {
    return <LoadingBase />;
  }

  return (
    <Parent>
      <VideoContentDiv>
        {/* 動画情報 */}
        <FavoriteVideoDetailInfo
          videoDetail={videoDetail}
        />
        {/* メニュー */}
        <FavoriteVideoDetailMenu
          videoDetail={videoDetail}
          videoId={videoId}
        />
      </VideoContentDiv>
    </Parent>
  );
}