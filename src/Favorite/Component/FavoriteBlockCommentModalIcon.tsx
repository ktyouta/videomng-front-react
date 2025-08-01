import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import { useFavoriteBlockCommentModalIcon } from "../Hook/useFavoriteBlockCommentModalIcon";
import React from "react";
import ModalComponent from "../../Common/Component/ModalComponent";
import { FavoriteBlockComment } from "./FavoriteBlockComment";
import { OverlayDiv } from "../../Common/StyledComponent/OverlayDiv";


const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 70px;
    height: 20px;
    top: 33px;
    font-size: 10px;
    background-color: white;
    z-index: 10;
    position: absolute;
    left: -3px;
    box-sizing: border-box;
    color: black;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`;

export function FavoriteBlockCommentModalIcon() {

    const {
        isOpenBlockListNav,
        openBlockListNav,
        closeBlockListNav,
        isOpenBlockListModal,
        openBlockListModal,
        closeBlockListModal,
    } = useFavoriteBlockCommentModalIcon();

    return (
        <React.Fragment>
            <IconComponent
                icon={HiOutlineInbox}
                onclick={openBlockListModal}
                size="25%"
                style={{ color: "white" }}
                onMouseEnter={openBlockListNav}
                onMouseLeave={closeBlockListNav}
            />
            <BlockNavDiv
                isDisplay={isOpenBlockListNav}
            >
                非表示リスト
            </BlockNavDiv>
            {
                // 非表示コメントリスト
                isOpenBlockListModal &&
                <ModalComponent
                    modalIsOpen={isOpenBlockListModal}
                    closeModal={closeBlockListModal}
                    style={{
                        backgroundColor: "#181a1e",
                        borderRadius: "1%",
                        border: "solid 1px",
                    }}
                    isPositionCenter={true}
                >
                    <FavoriteBlockComment
                        close={closeBlockListModal}
                    />
                </ModalComponent>
            }
            {
                isOpenBlockListModal &&
                <OverlayDiv />
            }
        </React.Fragment>
    );
}