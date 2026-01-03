import styled from "styled-components";
import { FLG } from "../../../../consts/CommonConst";
import { MEDIA } from "../../../../consts/MediaConst";
import { VideoListItemType } from "../../../../types/videolist/VideoListItemType";
import { useChannelVideoContent } from "../../hooks/videochannel/useChannelVideoContent";
import { FavoriteIconArea } from "./FavoriteIconArea";


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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

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
    font-size: 11px;
`;


type propsType = {
    data: VideoListItemType,
}

export function ChannelVideoContent(props: propsType) {

    console.log("ChannelVideoContent render");

    const { clickVideo } = useChannelVideoContent();

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
                            clickVideo(videoId, favoriteFlg);
                        }}
                    />
                    {
                        favoriteFlg === FLG.ON &&
                        // お気に入りアイコン
                        <FavoriteIconArea />
                    }
                </VideoImgAreaDiv>
                <VideoTitleDiv
                    onClick={() => {
                        clickVideo(videoId, favoriteFlg);
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