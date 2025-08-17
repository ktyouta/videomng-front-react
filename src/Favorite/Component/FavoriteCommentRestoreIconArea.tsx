import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../Hook/useFavoriteMemoEditIconArea";
import { useFavoriteMemoDeleteIconArea } from "../Hook/useFavoriteMemoDeleteIconArea";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFavoriteCommentBlockIconArea } from "../Hook/useFavoriteCommentBlockIconArea";
import { MdVisibility } from "react-icons/md";
import { useFavoriteCommentRestoreIconArea } from "../Hook/useFavoriteCommentRestoreIconArea";
import { MEDIA } from "../../Common/Const/MediaConst";


const IconDiv = styled.div`
    position: relative;
    width: 12px;
    height: 12px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        width: 16px;
        height: 16px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        width: 16px;
        height: 16px;
    }

    @media (min-width: ${MEDIA.PC}) {
        width: 16px;
        height: 16px;
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
                size="100%"
                style={{ color: "white" }}
                onMouseEnter={openBlockNav}
                onMouseLeave={closeBlockNav}
            />
            <BlockNavDiv
                isDisplay={isOpenBlockNav}
            >
                再表示
            </BlockNavDiv>
        </IconDiv>
    );
}