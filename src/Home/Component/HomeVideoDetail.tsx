import React from "react";
import { useHomeVideoDetail } from "../Hook/useHomeVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";


const Parent = styled.div`
  width: 100%;
  height: 100%;
  box-sizing:border-box;
  padding-top:2%;
`;

const VideoContentDiv = styled.div`
  width: 100%;
  height: 52%;
  display:flex;
  box-sizing:border-box;
  padding-left:9%;
  padding-right:5%;
`;

const VideoInfoDiv = styled.div`
  width: 60%;
  height: 100%;
`;

const VideoImg = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 6%;
`;

const VideoDescriptionDiv = styled.div`
  height: 20%;
`;

const VideoTitle = styled.h3`
  color:white;
`;

const ChennelTitleDiv = styled.div`
  color:white;
  font-size: 17px;
`;

const MenuParentDiv = styled.div`
  width: 34%;
  height: 100%;
  margin-left: 3%;
  margin-top: 5%;
  box-sizing:border-box;
`;

const MenuListDiv = styled.div`
  box-sizing:border-box;
  height: 70%;
  background-color: #37475A;
  border-radius: 2%;
  border: solid 1px;
`;

const MenuButtonDiv = styled.div`
  box-sizing:border-box;
  padding:3%;
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

    const snippet = videoDetail?.snippet;
    // サムネイルURL
    const imgUrl = snippet?.thumbnails.high?.url;
    // タイトル
    const title = snippet?.title;
    // チャンネル名
    const channelTitle = snippet?.channelTitle;
    // 動画URL
    const videoUrlModel = new VideoUrlModel(videoId);

    return (
        <Parent>
            <VideoContentDiv>
                {/* 動画情報 */}
                <VideoInfoDiv>
                    <VideoImg
                        src={imgUrl}
                    />
                    <VideoDescriptionDiv>
                        <VideoTitle>
                            {title}
                        </VideoTitle>
                        <ChennelTitleDiv>
                            {channelTitle}
                        </ChennelTitleDiv>
                    </VideoDescriptionDiv>
                </VideoInfoDiv>
                {/* メニュー */}
                <MenuParentDiv>
                    <MenuListDiv>
                        <MenuButtonDiv>
                            <ButtonComponent
                                styleTypeNumber="GRAD_GRAY"
                                title={"動画を視聴する"}
                                onclick={() => {
                                    window.open(`${videoUrlModel.videoUrl}`, `_blank`);
                                }}
                                style={{
                                    "fontSize": "0.9rem",
                                    "height": "7%",
                                    "width": "90%",
                                }}
                            />
                        </MenuButtonDiv>
                    </MenuListDiv>
                </MenuParentDiv>
            </VideoContentDiv>
        </Parent>
    );
}