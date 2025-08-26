import styled from "styled-components";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import { useFavoriteBlockCommentModalIcon } from "../../../Hook/VideoDetail/VideoComment/VideoBlockComment/useFavoriteBlockCommentModalIcon";
import React from "react";
import ModalComponent from "../../../../Common/Component/ModalComponent";
import { FavoriteBlockComment } from "../VideoComment/VideoBlockComment/FavoriteBlockComment";
import { OverlayDiv } from "../../../../Common/StyledComponent/OverlayDiv";
import { useFavoriteFavoriteCommentModalIcon } from "../../../Hook/VideoDetail/VideoComment/VideoFavoriteComment/useFavoriteFavoriteCommentModalIcon";
import { IoNewspaperOutline } from "react-icons/io5";
import { FavoriteFavoriteComment } from "../VideoComment/VideoFavoriteComment/FavoriteFavoriteComment";
import { useFavoriteDetailSettingEditIcon } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSettingEditIcon";
import { MdEdit } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useFavoriteDetailSettingCloseIcon } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSettingCloseIcon";
import { useFavoriteTagEditCloseIcon } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTagEditCloseIcon";
import { MEDIA } from "../../../../Common/Const/MediaConst";


const Parent = styled.div`
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
  margin-right: 14px;
  width: 15px;
  height: 15px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      width: 22px;
      height: 22px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      width: 22px;
      height: 22px;
  }

  @media (min-width: ${MEDIA.PC}) {
      width: 22px;
      height: 22px;
  }
`;

const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 40px;
    height: 20px;
    top: 29px;
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


export function FavoriteTagEditCloseIcon() {

    const {
        isOpenCloseNav,
        openCloseNav,
        closeCloseNav,
        changeView,
    } = useFavoriteTagEditCloseIcon();

    return (
        <Parent>
            <IconComponent
                icon={RxCross1}
                onclick={changeView}
                size="100%"
                style={{ color: "white" }}
                onMouseEnter={openCloseNav}
                onMouseLeave={closeCloseNav}
            />
            <BlockNavDiv
                isDisplay={isOpenCloseNav}
            >
                閉じる
            </BlockNavDiv>
        </Parent>

    );
}