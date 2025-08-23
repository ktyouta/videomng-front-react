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
import { FaCheck } from "react-icons/fa6";
import { FavoriteVideoDetailCategoryType } from "../../../Type/VideoDetail/VideoDetailSetting/FavoriteVideoDetailCategoryType";
import { useFavoriteDetailSettingUpdateIcon } from "../../../Hook/VideoDetail/VideoDetailSetting/useFavoriteDetailSettingUpdateIcon";
import { MEDIA } from "../../../../Common/Const/MediaConst";


const Parent = styled.div`
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
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
    top: 33px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: 20px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;


type propsType = {
    updateFavoriteVideo: () => void,
}


export function FavoriteDetailSettingUpdateIcon(props: propsType) {

    const {
        isOpenUpdateNav,
        openUpdateNav,
        closeUpdateNav,
    } = useFavoriteDetailSettingUpdateIcon();

    return (
        <Parent>
            <IconComponent
                icon={FaCheck}
                onclick={props.updateFavoriteVideo}
                size="100%"
                style={{ color: "white" }}
                onMouseEnter={openUpdateNav}
                onMouseLeave={closeUpdateNav}
            />
            <BlockNavDiv
                isDisplay={isOpenUpdateNav}
            >
                更新
            </BlockNavDiv>
        </Parent>

    );
}