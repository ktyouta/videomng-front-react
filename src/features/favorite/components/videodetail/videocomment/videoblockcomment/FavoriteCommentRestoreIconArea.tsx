import React from "react";
import { IconComponent } from "../../../../../../components/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../../../../hooks/videodetail/videomemo/useFavoriteMemoEditIconArea";
import { useFavoriteMemoDeleteIconArea } from "../../../../hooks/videodetail/videomemo/useFavoriteMemoDeleteIconArea";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFavoriteCommentBlockIconArea } from "../../../../hooks/videodetail/videocomment/useFavoriteCommentBlockIconArea";
import { MdVisibility } from "react-icons/md";
import { useFavoriteCommentRestoreIconArea } from "../../../../hooks/videodetail/videocomment/videoblockcomment/useFavoriteCommentRestoreIconArea";
import { MEDIA } from "../../../../../../consts/MediaConst";


const IconDiv = styled.div`
    position: relative;
    font-size: 16px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        font-size: 20px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        font-size: 20px;
    }

    @media (min-width: ${MEDIA.PC}) {
        font-size: 20px;
    }
`;

const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 58px;
    height: 25px;
    top: 35px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: 14px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

type propsType = {
    restoreComment: () => void
}

export function FavoriteCommentRestoreIconArea(props: propsType) {

    console.log("FavoriteCommentRestoreIconArea render");

    const {
        isOpenBlockNav,
        openBlockNav,
        closeBlockNav, } = useFavoriteCommentRestoreIconArea();

    return (
        <IconDiv>
            <IconComponent
                icon={MdVisibility}
                onclick={props.restoreComment}
                bgColor="white"
                onMouseEnter={openBlockNav}
                onMouseLeave={closeBlockNav}
                hasCircleBackground
            />
            <BlockNavDiv
                isDisplay={isOpenBlockNav}
            >
                再表示
            </BlockNavDiv>
        </IconDiv>
    );
}