import React from "react";
import styled from "styled-components";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";
import { useFavoriteVideoContent } from "../Hook/useFavoriteVideoContent";

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

export function FavoriteVideoContent(props: propsType) {

    console.log("FavoriteVideoContent render");

    const { clickVideo } = useFavoriteVideoContent();

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