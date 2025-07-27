import React from "react";
import { useFavoriteVideoDetail } from "../Hook/useFavoriteVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { FavoriteVideoDetailInfo } from "./FavoriteVideoDetailInfo";
import { FavoriteVideoDetailMenu } from "./FavoriteVideoDetailMenu";
import { FaArrowLeft } from "react-icons/fa6";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MEDIA } from "../../Common/Const/MediaConst";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
  position:relative;
`;

const VideoContentDiv = styled.div`
  width: 100%;
  height: 52%;
  box-sizing:border-box;
  padding-left:6%;
  padding-right:5%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    display:flex;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    display:flex;
  }

  @media (min-width: ${MEDIA.PC}) {
    display:flex;
  }
`;

const MessageDiv = styled.div`
  color:white;
  position: absolute;
  top: 32%;
  left: 42%;
`;


export function FavoriteVideoDetail() {

  console.log("FavoriteVideoDetail render");

  const {
    isLoading,
    videoDetail,
    errMessage,
    backPage } = useFavoriteVideoDetail();

  if (!videoDetail) {
    return <LoadingBase />;
  }

  // ローディング
  if (isLoading) {
    return <LoadingBase />;
  }

  // 詳細取得エラー
  if (errMessage) {
    return (
      <Parent>
        <MessageDiv>
          {errMessage}
        </MessageDiv>
      </Parent>
    );
  }

  return (
    <Parent>
      <IconComponent
        icon={FaArrowLeft}
        size="20"
        style={{
          "color": "white",
          "position": "absolute",
          "top": "0%",
          "left": "3%",
        }}
        onclick={backPage}
      />
      <VideoContentDiv>
        {/* 動画情報 */}
        <FavoriteVideoDetailInfo
          videoDetail={videoDetail}
        />
        {/* メニュー */}
        <FavoriteVideoDetailMenu
          videoDetail={videoDetail}
        />
      </VideoContentDiv>
    </Parent>
  );
}