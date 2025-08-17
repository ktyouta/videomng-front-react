import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../Hook/useFavoriteMemoEditIconArea";
import { useFavoriteMemoDeleteIconArea } from "../Hook/useFavoriteMemoDeleteIconArea";
import { FaRegTrashAlt } from "react-icons/fa";
import { MEDIA } from "../../Common/Const/MediaConst";


const Parent = styled.div`
  box-sizing: border-box;
  position:relative;
  display: flex;
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

const DeleteNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 40px;
    height: 25px;
    top: 39px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: 32px;
    box-sizing: border-box;
    color: black;
    justify-content: center;
    align-items: center;
`;

type propsType = {
    deleteMemo: () => void
}

export function FavoriteMemoDeleteIconArea(props: propsType) {

    console.log("FavoriteMemoDeleteIconArea render");

    const {
        isOpenDeleteNav,
        openDeleteNav,
        closeDeleteNav, } = useFavoriteMemoDeleteIconArea();

    return (
        <Parent>
            <IconComponent
                icon={FaRegTrashAlt}
                onclick={props.deleteMemo}
                size="100%"
                style={{ color: "white" }}
                onMouseEnter={openDeleteNav}
                onMouseLeave={closeDeleteNav}
            />
            <DeleteNavDiv
                isDisplay={isOpenDeleteNav}
            >
                削除
            </DeleteNavDiv>
        </Parent>
    );
}