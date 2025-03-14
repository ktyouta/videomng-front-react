import React from "react";
import { useHomeVideoDetail } from "../Hook/useHomeVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";
import AccordionComponent from "../../Common/Component/AccordionComponent";


const VideoInfoDiv = styled.div`
  width: 60%;
`;

const VideoImg = styled.img`
    width: 88%;
    height: 488px;
    border-radius: 6%;
`;

const VideoMetaDiv = styled.div`
    color:white;
`;

const VideoTitle = styled.h3`
`;

const ChennelTitleDiv = styled.div`
  font-size: 17px;
  margin-bottom:8%;
`;

const DescriptionDiv = styled.div`
  box-sizing:border-box;
  padding-right:8%;
`;



type propsType = {
    videoDetail: YouTubeDataApiVideoDetailItemType | undefined
}


export function HomeVideoDetailInfo(props: propsType) {

    console.log("HomeVideoDetailInfo render");

    const videoDetail = props.videoDetail;
    const snippet = videoDetail?.snippet;
    // サムネイルURL
    const imgUrl = snippet?.thumbnails.high?.url;
    // タイトル
    const title = snippet?.title;
    // チャンネル名
    const channelTitle = snippet?.channelTitle;
    // 動画説明
    const description = snippet?.description;

    return (
        <VideoInfoDiv>
            <VideoImg
                src={imgUrl}
            />
            <VideoMetaDiv>
                <VideoTitle>
                    {title}
                </VideoTitle>
                <ChennelTitleDiv>
                    {channelTitle}
                </ChennelTitleDiv>
                <DescriptionDiv>
                    <AccordionComponent
                        defaultHeight={'70px'}
                        outerStyle={{
                            border: "solid 1px",
                            boxSizing: "border-box",
                            padding: "1%",
                            borderRadius: "6px"
                        }}
                    >
                        {description}
                    </AccordionComponent>
                </DescriptionDiv>
            </VideoMetaDiv>
        </VideoInfoDiv >
    );
}