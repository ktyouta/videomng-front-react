import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../Hook/useFavoriteMemoEditIconArea";
import { useFavoriteMemoDeleteIconArea } from "../Hook/useFavoriteMemoDeleteIconArea";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFavoriteCommentBlockIconArea } from "../Hook/useFavoriteCommentBlockIconArea";
import { MdVisibilityOff } from "react-icons/md";
import { useFavoriteCommentFavoriteIconArea } from "../Hook/useFavoriteCommentFavoriteIconArea";
import { FavoriteVideoCommentThreadItemType } from "../Type/FavoriteVideoCommentThreadItemType";
import { FaStar } from "react-icons/fa";


const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 85px;
    height: 25px;
    top: 39px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -17px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

type propsType = {
    commentId: string
}

export function FavoriteCommentFavoriteIconArea(props: propsType) {

    console.log("FavoriteCommentFavoriteIconArea render");

    const {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav,
        favoriteComment,
        isFavorite, } = useFavoriteCommentFavoriteIconArea();

    // アイコンカラー
    const iconColor = isFavorite() ? `yellow` : `white`;

    return (
        <React.Fragment>
            <IconComponent
                icon={FaStar}
                onclick={() => { favoriteComment(props.commentId); }}
                size="45%"
                style={{
                    color: iconColor,
                }}
                onMouseEnter={openFavoriteNav}
                onMouseLeave={closeFavoriteNav}
            />
            <BlockNavDiv
                isDisplay={isOpenFavoriteNav}
            >
                お気に入りに登録
            </BlockNavDiv>
        </React.Fragment>
    );
}