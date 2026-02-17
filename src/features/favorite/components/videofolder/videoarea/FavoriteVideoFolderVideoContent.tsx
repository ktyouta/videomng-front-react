import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { ModalPortalConfirm } from "../../../../../components/ModalPortalConfirm";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteVideoFolderVideoContent } from "../../../hooks/videofolder/videoarea/useFavoriteVideoFolderVideoContent";
import { FavoriteVideoListMergedType } from "../../../types/FavoriteVideoListMergedType";


const VideoArticle = styled.article`
`;

const VideoSection = styled.section`
    width: 100%;
    position: relative;
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

const ChennelTitleSpan = styled.span`
    cursor:pointer;
    &:hover {
        color:#2563eb;
    }
`;

type propsType = {
    data: FavoriteVideoListMergedType,
}

export function FavoriteVideoFolderVideoContent(props: propsType) {

    console.log("FavoriteVideoFolderVideoContent render");

    const {
        clickVideo,
        deleteVideo,
        isOpenModal,
        openModal,
        closeModal,
        clickChannel,
        setNodeRef,
        draggingStyle,
        attributes,
        listeners, } = useFavoriteVideoFolderVideoContent({ ...props });

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
    // チャンネルID
    const channelId = snipet.channelId;

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
                    onClick={() => {
                        clickVideo(videoId);
                    }}
                />
                <VideoTitleDiv
                    onClick={() => {
                        clickVideo(videoId);
                    }}
                >
                    {title}
                </VideoTitleDiv>
                {/* 動画削除アイコン */}
                <Icon
                    icon={FaTrash}
                    bgColor="rgb(200, 200, 200)"
                    style={{
                        position: `absolute`,
                        top: `0`,
                        right: `1%`
                    }}
                    width="20px"
                    height="20px"
                    onclick={openModal}
                />
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
            {/* 確認用モーダル */}
            <ModalPortalConfirm
                isOpenModal={isOpenModal}
                closeModal={closeModal}
                titleMessage={`選択した動画をフォルダから除外します。よろしいですか？`}
                clickOk={deleteVideo}
            />
        </VideoArticle>
    );
}