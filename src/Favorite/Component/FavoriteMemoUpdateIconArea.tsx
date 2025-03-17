import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../Hook/useFavoriteMemoEditIconArea";
import { useFavoriteMemoUpdateIconArea } from "../Hook/useFavoriteMemoUpdateIconArea";
import { FaCheck } from "react-icons/fa6";


const UpdateNavDiv = styled.div<{ isDisplay: boolean }>`
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
    updateMemo: () => void
}

export function FavoriteMemoUpdateIconArea(props: propsType) {

    console.log("FavoriteMemoUpdateIconArea render");

    const {
        isOpenUpdateNav,
        openUpdateNav,
        closeUpdateNav,
    } = useFavoriteMemoUpdateIconArea();

    return (
        <React.Fragment>
            <IconComponent
                icon={FaCheck}
                onclick={props.updateMemo}
                size="50%"
                onMouseEnter={openUpdateNav}
                onMouseLeave={closeUpdateNav}
            />
            <UpdateNavDiv
                isDisplay={isOpenUpdateNav}
            >
                更新
            </UpdateNavDiv>
        </React.Fragment>
    );
}