import React from "react";
import { IconComponent } from "../../../../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoEditIconArea";
import { useFavoriteMemoDeleteIconArea } from "../../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoDeleteIconArea";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFavoriteCommentBlockIconArea } from "../../../../Hook/VideoDetail/VideoComment/useFavoriteCommentBlockIconArea";
import { MdVisibility } from "react-icons/md";
import { useFavoriteCommentRestoreIconArea } from "../../../../Hook/VideoDetail/VideoComment/VideoBlockComment/useFavoriteCommentRestoreIconArea";
import { useFavoriteFavoriteCommentDeleteIconArea } from "../../../../Hook/VideoDetail/VideoComment/VideoFavoriteComment/useFavoriteFavoriteCommentDeleteIconArea";
import { MEDIA } from "../../../../../Common/Const/MediaConst";


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
    width: 92px;
    height: 25px;
    top: 35px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -10px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

type propsType = {
    deleteComment: () => void
}

export function FavoriteFavoriteCommentDeleteIconArea(props: propsType) {

    console.log("FavoriteFavoriteCommentDeleteIconArea render");

    const {
        isOpenDeleteNav,
        openDeleteNav,
        closeDeleteNav, } = useFavoriteFavoriteCommentDeleteIconArea();

    return (
        <IconDiv>
            <IconComponent
                icon={FaRegTrashAlt}
                onclick={props.deleteComment}
                size="100%"
                style={{ color: "white" }}
                onMouseEnter={openDeleteNav}
                onMouseLeave={closeDeleteNav}
            />
            <BlockNavDiv
                isDisplay={isOpenDeleteNav}
            >
                お気に入りから外す
            </BlockNavDiv>
        </IconDiv>
    );
}