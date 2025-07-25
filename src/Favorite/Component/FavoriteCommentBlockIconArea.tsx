import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../Hook/useFavoriteMemoEditIconArea";
import { useFavoriteMemoDeleteIconArea } from "../Hook/useFavoriteMemoDeleteIconArea";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFavoriteCommentBlockIconArea } from "../Hook/useFavoriteCommentBlockIconArea";
import { MdVisibilityOff } from "react-icons/md";

const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 50px;
    height: 25px;
    top: 39px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: 15px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}
`;

type propsType = {
    blockComment: () => void,
    iconSize?: string
}

export function FavoriteCommentBlockIconArea(props: propsType) {

    console.log("FavoriteCommentBlockIconArea render");

    const {
        isOpenBlockNav,
        openBlockNav,
        closeBlockNav, } = useFavoriteCommentBlockIconArea();

    return (
        <React.Fragment>
            <IconComponent
                icon={MdVisibilityOff}
                onclick={props.blockComment}
                size={props.iconSize ?? "45%"}
                style={{ color: "white" }}
                onMouseEnter={openBlockNav}
                onMouseLeave={closeBlockNav}
            />
            <BlockNavDiv
                isDisplay={isOpenBlockNav}
            >
                非表示
            </BlockNavDiv>
        </React.Fragment>
    );
}