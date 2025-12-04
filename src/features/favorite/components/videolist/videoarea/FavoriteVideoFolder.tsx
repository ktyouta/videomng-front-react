import React from "react";
import { BiSolidFolder } from "react-icons/bi";
import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteVideoFolder } from "../../../hooks/videolist/videoarea/useFavoriteVideoFolder";
import { FolderType } from "../../../types/videolist/FolderType";


const Parent = styled.div`
    height: 100%;
`;

const Section = styled.section`
    height: 100%;
    width:100%;
`;

const IconAreaDiv = styled.div`
    height: 73%;
    margin-bottom: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: filter 0.2s ease;
`;

const VideoImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const ThumbnailWrapper = styled.div`
    position: absolute;
    width: 76%;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    overflow: hidden;
`;

const TitleDiv = styled.div`
    color: white;
    cursor: pointer;
    word-break: break-word;
    font-size: 11px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 27px;
    box-sizing: border-box;

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



type propsType = {
    data: FolderType,
}

export function FavoriteVideoFolder(props: propsType) {

    console.log("FavoriteVideoFolder render");

    const {
        setNodeRef,
        draggingStyle,
        clickFolder, } = useFavoriteVideoFolder({ ...props });

    const data = props.data
    const name = data.name;
    const id = data.folderId;
    const thumbnails = data.thumbnails;
    const thumbnailUrl = thumbnails?.high?.url;

    return (
        <Parent
            ref={setNodeRef}
        >
            <Section>
                <IconAreaDiv
                    style={draggingStyle}
                    onClick={() => {
                        clickFolder(id);
                    }}
                >
                    <Icon
                        icon={BiSolidFolder}
                        width="100%"
                        bgColor="rgb(0, 168, 255)"
                    />
                    {
                        thumbnailUrl &&
                        <React.Fragment>
                            <ThumbnailWrapper>
                                <VideoImg src={thumbnailUrl} />
                            </ThumbnailWrapper>
                            <Icon
                                icon={FaFolder}
                                width="81%"
                                bgColor="rgb(0, 168, 255)"
                                style={{
                                    position: `absolute`,
                                    top: `30%`,
                                    left: `9%`,
                                    transform: `scaleX(-1.0) scaleY(0.30)`,
                                }}
                            />
                        </React.Fragment>
                    }
                </IconAreaDiv>
                <TitleDiv
                    onClick={() => {
                        clickFolder(id);
                    }}
                >
                    {name}
                </TitleDiv>
            </Section>
        </Parent>
    );
}