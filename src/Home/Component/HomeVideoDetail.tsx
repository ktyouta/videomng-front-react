import React from "react";
import { useHomeVideoDetail } from "../Hook/useHomeVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { HomeVideoDetailInfo } from "./HomeVideoDetailInfo";
import { HomeVideoDetailMenu } from "./HomeVideoDetailMenu";
import { FaArrowLeft } from "react-icons/fa6";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MEDIA } from "../../Common/Const/MediaConst";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
  position-relative;
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
  top: 28%;
  left: 42%;
`;

const BackHomeP = styled.p`
  color:blue;
  cursor: pointer;
`;


export function HomeVideoDetail() {

  console.log("HomeVideoDetail render");

  const {
    isLoading,
    videoDetail,
    errMessage,
    backHome, } = useHomeVideoDetail();

  // ローディング
  if (isLoading) {
    return <LoadingBase />;
  }

  if (errMessage) {
    return (
      <MessageDiv>
        <p>
          {errMessage}
        </p>
        <BackHomeP
          onClick={backHome}
        >
          一覧に戻る
        </BackHomeP>
      </MessageDiv>
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
          "top": "18%",
          "left": "3%",
        }}
        onclick={backHome}
      />
      <VideoContentDiv>
        {/* 動画情報 */}
        <HomeVideoDetailInfo
          videoDetail={videoDetail}
        />
        {/* メニュー */}
        <HomeVideoDetailMenu
          videoDetail={videoDetail}
        />
      </VideoContentDiv>
    </Parent>
  );
}