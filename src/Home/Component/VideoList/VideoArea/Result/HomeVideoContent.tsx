import React from "react";
import styled from "styled-components";
import { YouTubeDataApiVideoListItemType } from "../../../../Type/VideoList/YouTubeDataApiVideoListItemType";
import { useHomeVideoContent } from "../../../../Hook/VideoList/VideoArea/Result/useHomeVideoContent";
import { VideoListItemType } from "../../../../Type/VideoList/VideoListItemType";
import { IconComponent } from "../../../../../Common/Component/IconComponent";
import { FaStar } from "react-icons/fa";
import { FLG } from "../../../../../Common/Const/CommonConst";
import { HomeVideoContentFavoriteIconArea } from "./HomeFavoriteIconArea";
import { MEDIA } from "../../../../../Common/Const/MediaConst";


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

const VideoImgAreaDiv = styled.div`
    font-size: 16px;
    position:relative;
`;

const VideoTitleDiv = styled.div`
    color:white;
    cursor:pointer;
    word-break: break-word;
    font-size: 11px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        font-size: 12px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        font-size: 14px;
    }

    @media (min-width: ${MEDIA.PC}) {
        font-size: 14px;
    }
`;

const DateDiv = styled.div`
    font-size: 10px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        font-size: 10px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        font-size: 11px;
    }

    @media (min-width: ${MEDIA.PC}) {
        font-size: 11px;
    }
`;

const ChennelTitleDiv = styled.div`
    font-size: 10px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        font-size: 10px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        font-size: 11px;
    }

    @media (min-width: ${MEDIA.PC}) {
        font-size: 11px;
    }
`;

const ChennelTitleSpan = styled.span`
    cursor:pointer;
    &:hover {
        color:#2563eb;
    }
`;


type propsType = {
    data: VideoListItemType,
}

export function HomeVideoContent(props: propsType) {

    console.log("HomeVideoContent render");

    const {
        clickVideo,
        clickChannel } = useHomeVideoContent();

    const data = props.data
    const snipet = data.snippet;
    // 動画タイトル
    const title = snipet.title;
    // サムネイルURL
    const imgUrl = snipet.thumbnails.high.url;
    // チャンネル名
    const channelTitle = snipet.channelTitle;
    // チャンネルID
    const channelId = snipet.channelId;
    // 動画ID
    const videoId = data.id.videoId ?? ``;
    // 日付
    const dateList = snipet.publishedAt.split("T");
    const publishedDate = dateList.length > 0 ? dateList[0] : ``;
    // お気に入りフラグ
    const favoriteFlg = data.favoriteFlg;

    return (
        <VideoArticle>
            <VideoSection>
                <VideoImgAreaDiv>
                    <VideoImg
                        src={imgUrl}
                        onClick={() => {
                            clickVideo(videoId)
                        }}
                    />
                    {
                        favoriteFlg === FLG.ON &&
                        // お気に入りアイコン
                        <HomeVideoContentFavoriteIconArea />
                    }
                </VideoImgAreaDiv>
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
                <ChennelTitleDiv
                    onClick={() => {
                        clickChannel(channelId)
                    }}
                >
                    <ChennelTitleSpan>
                        {channelTitle}
                    </ChennelTitleSpan>
                </ChennelTitleDiv>
            </VideoSection>
        </VideoArticle>
    );
}