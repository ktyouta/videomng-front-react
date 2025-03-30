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
import { useFavoriteFavoriteCommentDeleteIconArea } from "../Hook/useFavoriteFavoriteCommentDeleteIconArea";


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
        <React.Fragment>
            <IconComponent
                icon={FaRegTrashAlt}
                onclick={props.deleteComment}
                size="45%"
                style={{ color: "white" }}
                onMouseEnter={openDeleteNav}
                onMouseLeave={closeDeleteNav}
            />
            <BlockNavDiv
                isDisplay={isOpenDeleteNav}
            >
                お気に入りから外す
            </BlockNavDiv>
        </React.Fragment>
    );
}