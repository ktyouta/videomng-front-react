import React from "react";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useFavoriteMemoCacelIconArea } from "../../../hooks/videodetail/videomemo/useFavoriteMemoCacelIconArea";


const IconSizeDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  margin-right: 14px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      font-size: 20px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      font-size: 20px;
  }

  @media (min-width: ${MEDIA.PC}) {
      font-size: 20px;
  }
`;

const CancelNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 50px;
    height: 25px;
    top: 39px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -5px;
    box-sizing: border-box;
    color: black;
    justify-content: center;
    align-items: center;
`;


type propsType = {
    closeEdit: () => void
}

export function FavoriteMemoCancelIconArea(props: propsType) {

    console.log("FavoriteMemoCancelIconArea render");

    const {
        isOpenCancelNav,
        openCancelNav,
        closeCancelNav, } = useFavoriteMemoCacelIconArea();

    return (
        <React.Fragment>
            <IconSizeDiv>
                <IconComponent
                    icon={RxCross1}
                    onclick={props.closeEdit}
                    onMouseEnter={openCancelNav}
                    onMouseLeave={closeCancelNav}
                    bgColor="#E53935"
                    hasCircleBackground
                />
            </IconSizeDiv>
            <CancelNavDiv
                isDisplay={isOpenCancelNav}
            >
                キャンセル
            </CancelNavDiv>
        </React.Fragment>
    );
}