import React from "react";
import { useHomeVideoDetail } from "../../hooks/videodetail/useHomeVideoDetail";
import LoadingBase from "../../../../components/LoadingBase";
import styled from "styled-components";
import { HomeVideoDetailInfo } from "./HomeVideoDetailInfo";
import { HomeVideoDetailMenu } from "./HomeVideoDetailMenu";
import { FaArrowLeft } from "react-icons/fa6";
import { IconComponent } from "../../../../components/IconComponent";
import { MEDIA } from "../../../../consts/MediaConst";
import Loading from "../../../../components/Loading";
import { createCtx } from "../../../../utils/createCtx";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
  position:relative;
`;

const LoadingParent = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
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

function VideoLoading() {

  return (
    <LoadingParent>
      <Loading />
    </LoadingParent>
  );
}

export function HomeVideoDetail() {

  console.log("HomeVideoDetail render");

  const {
    isLoading,
    videoDetail,
    isError,
    backScreen, } = useHomeVideoDetail();

  if (isError) {
    return (
      <MessageDiv>
        <p>
          動画情報の取得に失敗しました。
        </p>
        <BackHomeP
          onClick={backScreen}
        >
          一覧に戻る
        </BackHomeP>
      </MessageDiv>
    );
  }

  if (!videoDetail) {
    return <VideoLoading />;
  }

  // ローディング
  if (isLoading) {
    return <VideoLoading />;
  }

  return (
    <Parent>
      <IconComponent
        icon={FaArrowLeft}
        size="20"
        style={{
          "color": "white",
          "position": "absolute",
          "top": "0",
          "left": "3%",
        }}
        onclick={backScreen}
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