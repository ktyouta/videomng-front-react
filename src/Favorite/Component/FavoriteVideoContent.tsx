import React from "react";
import styled from "styled-components";
import { useFavoriteVideoContent } from "../Hook/useFavoriteVideoContent";
import { FavoriteVideoListMergedType } from "../Type/FavoriteVideoListMergedType";

const VideoArticle = styled.article`
`;

const VideoSection = styled.section`
    width:100%;
`;

const VideoImg = styled.img`
    width:100%;
    border-radius: 6%;
    cursor:pointer;
`;

const VideoTitleDiv = styled.div`
    color:white;
    cursor:pointer;
    font-size: 16px;
`;

const DateDiv = styled.div`
    font-size: 11px;
`;

const ChennelTitleDiv = styled.div`
    font-size: 11px;
`;


type propsType = {
    data: FavoriteVideoListMergedType,
}

export function FavoriteVideoContent(props: propsType) {

    console.log("FavoriteVideoContent render");

    const { clickVideo } = useFavoriteVideoContent();

    const data = props.data
    const snipet = data.snippet;
    // 動画タイトル
    const title = snipet.title;
    // サムネイルURL
    const imgUrl = snipet.thumbnails.high?.url;
    // チャンネル名
    const channelTitle = snipet.channelTitle;
    // 動画ID
    const videoId = data.id ?? ``;
    // 日付
    const dateList = snipet.publishedAt.split("T");
    const publishedDate = dateList.length > 0 ? dateList[0] : ``;

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
                <DateDiv>
                    {publishedDate}
                </DateDiv>
                <ChennelTitleDiv>
                    {channelTitle}
                </ChennelTitleDiv>
            </VideoSection>
        </VideoArticle>
    );
}