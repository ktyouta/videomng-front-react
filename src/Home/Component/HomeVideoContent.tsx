import React from "react";
import styled from "styled-components";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { useHomeVideoContent } from "../Hook/useHomeVideoContent";

const VideoArticle = styled.article`
    width:100%;
    height:65%;
`;

const VideoSection = styled.section`
    width:100%;
    height:100%;
`;

const VideoImg = styled.img`
    width:100%;
    height:85%;
    border-radius: 6%;
    cursor:pointer;
`;

const VideoTitleDiv = styled.div`
    color:white;
    cursor:pointer;
    font-size: 16px;
`;

const ChennelTitleDiv = styled.div`
    font-size: 11px;
`;


type propsType = {
    data: YouTubeDataApiVideoListItemType,
}

export function HomeVideoContent(props: propsType) {

    console.log("HomeVideoContent render");

    const { clickVideo } = useHomeVideoContent();

    const data = props.data
    const snipet = data.snippet;
    // 動画タイトル
    const title = snipet.title;
    // サムネイルURL
    const imgUrl = snipet.thumbnails.high.url;
    // チャンネル名
    const channelTitle = snipet.channelTitle;
    // 動画ID
    const videoId = data.id.videoId ?? ``;

    return (
        <VideoArticle>
            <VideoSection>
                <VideoImg
                    src={imgUrl}
                    onClick={() => {
                        clickVideo(videoId)
                    }}
                />
                <VideoTitleDiv
                    onClick={() => {
                        clickVideo(videoId)
                    }}
                >
                    {title}
                </VideoTitleDiv>
                <ChennelTitleDiv>
                    {channelTitle}
                </ChennelTitleDiv>
            </VideoSection>
        </VideoArticle>
    );
}