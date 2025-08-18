import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../Hook/useFavoriteMemoEditIconArea";
import { MEDIA } from "../../Common/Const/MediaConst";


const Parent = styled.div`
  box-sizing: border-box;
  position:relative;
  display: flex;
  margin-right: 14px;
  width: 10px;
  height: 10px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      width: 13px;
      height: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      width: 13px;
      height: 13px;
  }

  @media (min-width: ${MEDIA.PC}) {
      width: 13px;
      height: 13px;
  }
`;

const EditNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 40px;
    height: 25px;
    top: 20px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -22px;
    box-sizing: border-box;
    color: black;
    justify-content: center;
    align-items: center;
`;

type propsType = {
    openEdit: () => void
}

export function FavoriteMemoEditIconArea(props: propsType) {

    console.log("FavoriteMemoEditIcon render");

    const {
        isOpenEditNav,
        openEditNav,
        closeEditNav, } = useFavoriteMemoEditIconArea();

    return (
        <Parent>
            <IconComponent
                icon={MdEdit}
                onclick={props.openEdit}
                size="100%"
                style={{ color: "white" }}
                onMouseEnter={openEditNav}
                onMouseLeave={closeEditNav}
            />
            <EditNavDiv
                isDisplay={isOpenEditNav}
            >
                編集
            </EditNavDiv>
        </Parent>
    );
}