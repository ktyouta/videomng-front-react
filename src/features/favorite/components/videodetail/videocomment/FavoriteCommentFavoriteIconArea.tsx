import React from "react";
import { IconComponent } from "../../../../../components/IconComponent";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../../../hooks/videodetail/videomemo/useFavoriteMemoEditIconArea";
import { useFavoriteMemoDeleteIconArea } from "../../../hooks/videodetail/videomemo/useFavoriteMemoDeleteIconArea";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFavoriteCommentBlockIconArea } from "../../../hooks/videodetail/videocomment/useFavoriteCommentBlockIconArea";
import { MdVisibilityOff } from "react-icons/md";
import { useFavoriteCommentFavoriteIconArea } from "../../../hooks/videodetail/videocomment/useFavoriteCommentFavoriteIconArea";
import { FaStar } from "react-icons/fa";
import { MEDIA } from "../../../../../consts/MediaConst";


const Parent = styled.div`
  box-sizing: border-box;
  position:relative;
  display: flex;
  margin-right: 14px;
  width: 10px;
  height: 10px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      width: 12px;
      height: 12px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      width: 12px;
      height: 12px;
  }

  @media (min-width: ${MEDIA.PC}) {
      width: 12px;
      height: 12px;
  }
`;

const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 85px;
    height: 25px;
    top: 20px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -49px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

type propsType = {
    commentId: string,
    isFavorite: boolean,
    onClick: (commentId: string) => void
}

export function FavoriteCommentFavoriteIconArea(props: propsType) {

    console.log("FavoriteCommentFavoriteIconArea render");

    const {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav, } = useFavoriteCommentFavoriteIconArea();

    // アイコンカラー
    const iconColor = props.isFavorite ? `yellow` : `white`;
    // ナビゲーションメッセージ
    const navMessage = props.isFavorite ? `お気に入りから外す` : `お気に入りに登録`;

    return (
        <Parent>
            <IconComponent
                icon={FaStar}
                onclick={() => { props.onClick(props.commentId); }}
                size="100%"
                style={{
                    color: iconColor,
                }}
                onMouseEnter={openFavoriteNav}
                onMouseLeave={closeFavoriteNav}
            />
            <BlockNavDiv
                isDisplay={isOpenFavoriteNav}
            >
                {navMessage}
            </BlockNavDiv>
        </Parent>
    );
}