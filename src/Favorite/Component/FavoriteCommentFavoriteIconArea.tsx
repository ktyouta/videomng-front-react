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
import { MEDIA } from "../../Common/Const/MediaConst";


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
    commentId: string,
    favoriteStatus: string,
    favoriteComment: (commentId: string) => void,
    deleteFavoriteComment: (commentId: string) => void,
}

export function FavoriteCommentFavoriteIconArea(props: propsType) {

    console.log("FavoriteCommentFavoriteIconArea render");

    const {
        isOpenFavoriteNav,
        openFavoriteNav,
        closeFavoriteNav,
        isFavorite, } = useFavoriteCommentFavoriteIconArea({ ...props });

    // アイコンカラー
    const iconColor = isFavorite() ? `yellow` : `white`;
    // ナビゲーションメッセージ
    const navMessage = isFavorite() ? `お気に入りから外す` : `お気に入りに登録`;
    // アイコンクリックイベント
    const iconClick = isFavorite() ? props.deleteFavoriteComment : props.favoriteComment;

    return (
        <Parent>
            <IconComponent
                icon={FaStar}
                onclick={() => { iconClick(props.commentId); }}
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