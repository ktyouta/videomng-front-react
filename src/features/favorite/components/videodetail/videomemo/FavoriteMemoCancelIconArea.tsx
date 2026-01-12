import React from "react";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { useFavoriteMemoCacelIconArea } from "../../../hooks/videodetail/videomemo/useFavoriteMemoCacelIconArea";


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
                bgColor="#E53935"
            />
            <CancelNavDiv
                isDisplay={isOpenCancelNav}
            >
                キャンセル
            </CancelNavDiv>
        </React.Fragment>
    );
}