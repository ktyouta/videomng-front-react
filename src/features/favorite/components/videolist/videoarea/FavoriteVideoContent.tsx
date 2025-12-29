import styled from "styled-components";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteVideoContent } from "../../../hooks/videolist/videoarea/useFavoriteVideoContent";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";

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


type propsType = {
    data: FavoriteVideoListMergedType,
}

export function FavoriteVideoContent(props: propsType) {

    console.log("FavoriteVideoContent render");

    const {
        attributes,
        listeners,
        setNodeRef,
        draggingStyle,
        handleMouseDown,
        handleMouseUp, } = useFavoriteVideoContent({ ...props });

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
        <VideoArticle
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={draggingStyle}
        >
            <VideoSection>
                <VideoImg
                    src={imgUrl}
                    onMouseDown={handleMouseDown}
                    onPointerUp={(e) => {
                        handleMouseUp(videoId, e);
                    }}
                />
                <VideoTitleDiv
                    onMouseDown={handleMouseDown}
                    onPointerUp={(e) => {
                        handleMouseUp(videoId, e);
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