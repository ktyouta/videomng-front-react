import React from "react";
import { useFavoriteVideoDetail } from "../Hook/useFavoriteVideoDetail";
import LoadingBase from "../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../Common/Component/ButtonComponent";
import { VideoUrlModel } from "../../Common/Model/VideoUrlModel";
import { YouTubeDataApiVideoDetailItemType } from "../Type/YouTubeDataApiVideoDetailItemType";


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
`;

const VideoDescription = styled.h3`

`;

type propsType = {
    videoDetail: YouTubeDataApiVideoDetailItemType | undefined
}


export function FavoriteVideoDetailInfo(props: propsType) {

    console.log("FavoriteVideoDetailInfo render");

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
                <VideoDescription>
                    {description}
                </VideoDescription>
            </VideoMetaDiv>
        </VideoInfoDiv>
    );
}