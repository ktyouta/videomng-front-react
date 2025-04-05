import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import { useFavoriteBlockCommentModalIcon } from "../Hook/useFavoriteBlockCommentModalIcon";
import React from "react";
import ModalComponent from "../../Common/Component/ModalComponent";
import { FavoriteBlockComment } from "./FavoriteBlockComment";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";
import { useFavoriteFavoriteCommentModalIcon } from "../Hook/useFavoriteFavoriteCommentModalIcon";
import { IoNewspaperOutline } from "react-icons/io5";
import { FavoriteFavoriteComment } from "./FavoriteFavoriteComment";
import { useFavoriteDetailSettingEditIcon } from "../Hook/useFavoriteDetailSettingEditIcon";
import { MdEdit } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useFavoriteDetailSettingCloseIcon } from "../Hook/useFavoriteDetailSettingCloseIcon";


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
        <React.Fragment>
            <IconComponent
                icon={RxCross1}
                onclick={props.changeView}
                size="75%"
                style={{ color: "white" }}
                onMouseEnter={openCloseNav}
                onMouseLeave={closeCloseNav}
            />
            <BlockNavDiv
                isDisplay={isOpenCloseNav}
            >
                閉じる
            </BlockNavDiv>
        </React.Fragment>

    );
}