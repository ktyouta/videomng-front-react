import React from "react";
import styled from "styled-components";
import { useFavoriteVideoContent } from "../../../hooks/videolist/videoarea/useFavoriteVideoContent";
import { FavoriteVideoListMergedType } from "../../../types/videolist/FavoriteVideoListMergedType";
import { MEDIA } from "../../../../../consts/MediaConst";
import { FolderType } from "../../../types/videolist/FolderType";
import { FaFolder } from 'react-icons/fa';
import { IconComponent } from "../../../../../components/IconComponent";
import { useFavoriteVideoFolder } from "../../../hooks/videolist/videoarea/useFavoriteVideoFolder";


const Parent = styled.div`
    height: 100%;
    &:hover {
        cursor: pointer;
    }
`;

const Section = styled.section`
    height: 100%;
    width:100%;
`;

const IconAreaDiv = styled.div`
    height: 72%;
    margin-bottom: 6px;
`;

const TitleDiv = styled.div`
    color:white;
    cursor:pointer;
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

    const { setNodeRef, draggingStyle } = useFavoriteVideoFolder({ ...props });

    const data = props.data
    const name = data.name;

    return (
        <Parent
            ref={setNodeRef}
        >
            <Section>
                <IconAreaDiv
                    style={draggingStyle}
                >
                    <IconComponent
                        icon={FaFolder}
                        size="100%"
                        bgColor="rgb(144, 202, 249)"
                    />
                </IconAreaDiv>
                <TitleDiv
                    onClick={() => {
                    }}
                >
                    {name}
                </TitleDiv>
            </Section>
        </Parent>
    );
}