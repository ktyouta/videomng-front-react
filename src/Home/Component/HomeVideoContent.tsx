import React from "react";
import styled from "styled-components";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";

const VideoArticle = styled.article`
    witdh:30%;
    height:55%;
`;

const VideoSection = styled.section`
    witdh:100%;
    height:100%;
`;

const VideoImg = styled.img`
    witdh:30%;
    height:55%;
`;

const VideoTitleDiv = styled.div`
    color:white;
`;

type propsType = {
    data: YouTubeDataApiVideoListItemType,
}

export function HomeVideoContent(props: propsType) {

    console.log("HomeVideoContent render");

    const snipet = props.data.snippet;
    // 動画タイトル
    const title = snipet.title;
    // サムネイルURL
    const imgUrl = snipet.thumbnails.default.url;

    return (
        <VideoArticle>
            <VideoSection>
                <VideoImg
                    src={imgUrl}
                />
                <VideoTitleDiv>
                    {title}
                </VideoTitleDiv>
            </VideoSection>
        </VideoArticle>
    );
}