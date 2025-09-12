import React from "react";
import styled from "styled-components";
import { YouTubeDataApiVideoListItemType } from "../../Type/VideoList/YouTubeDataApiVideoListItemType";
import { useHomeVideoContent } from "../../Hook/VideoList/VideoArea/useHomeVideoContent";
import { VideoListItemType } from "../../Type/VideoList/VideoListItemType";
import { IconComponent } from "../../../Common/Component/IconComponent";
import { FaStar } from "react-icons/fa";
import { FLG } from "../../../Common/Const/CommonConst";
import { HomeVideoContentFavoriteIconArea } from "../VideoList/VideoArea/HomeFavoriteIconArea";
import { useHomeChannelVideoContent } from "../../Hook/VideoChannel/useHomeChannelVideoContent";


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
    font-size: 14px;
`;

const DateDiv = styled.div`
    font-size: 11px;
`;


type propsType = {
    data: VideoListItemType,
}

export function HomeChannelVideoContent(props: propsType) {

    console.log("HomeChannelVideoContent render");

    const { clickVideo } = useHomeChannelVideoContent();

    const data = props.data
    const snipet = data.snippet;
    // 動画タイトル
    const title = snipet.title;
    // サムネイルURL
    const imgUrl = snipet.thumbnails.high.url;
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
            </VideoSection>
        </VideoArticle>
    );
}