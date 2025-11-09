import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import { useFavoriteBlockCommentModalIcon } from "../../../hooks/videodetail/videocomment/videoblockcomment/useFavoriteBlockCommentModalIcon";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useFavoriteDetailSettingCloseIcon } from "../../../hooks/videodetail/videodetailsetting/useFavoriteDetailSettingCloseIcon";
import { MEDIA } from "../../../../../consts/MediaConst";


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
    top: 33px;
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
    changeView: () => void,
}


export function FavoriteDetailSettingCloseIcon(props: propsType) {

    const {
        isOpenCloseNav,
        openCloseNav,
        closeCloseNav,
    } = useFavoriteDetailSettingCloseIcon();

    return (
        <Parent>
            <IconComponent
                icon={RxCross1}
                onclick={props.changeView}
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