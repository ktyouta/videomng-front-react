import React from "react";
import styled from "styled-components";
import { YouTubeDataApiVideoListItemType } from "../Type/YouTubeDataApiVideoListItemType";

const VideoArticle = styled.article`
`;

const VideoSection = styled.section`
`;

const VideoImg = styled.img`
`;

type propsType = {
    data: YouTubeDataApiVideoListItemType,
}

export function HomeVideoContent(props: propsType) {

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
                // width="30%"
                // height="55%"
                />
                <div>
                    {title}
                </div>
            </VideoSection>
        </VideoArticle>
    );
}