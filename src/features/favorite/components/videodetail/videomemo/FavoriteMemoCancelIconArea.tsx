import React from "react";
import { IconComponent } from "../../../../../components/IconComponent";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { useFavoriteMemoEditIconArea } from "../../../hooks/videodetail/videomemo/useFavoriteMemoEditIconArea";
import { useFavoriteMemoCacelIconArea } from "../../../hooks/videodetail/videomemo/useFavoriteMemoCacelIconArea";
import { RxCross1 } from "react-icons/rx";


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
            <IconComponent
                icon={RxCross1}
                onclick={props.closeEdit}
                size="50%"
                onMouseEnter={openCancelNav}
                onMouseLeave={closeCancelNav}
            />
            <CancelNavDiv
                isDisplay={isOpenCancelNav}
            >
                キャンセル
            </CancelNavDiv>
        </React.Fragment>
    );
}