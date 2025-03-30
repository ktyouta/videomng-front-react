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


const BlockNavDiv = styled.div<{ isDisplay: boolean }>`
    display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
    width: 70px;
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

export function FavoriteFavoriteCommentModalIcon() {

    const {
        isOpenFavoriteListNav,
        openFavoriteListNav,
        closeFavoriteListNav,
        isOpenFavoriteListModal,
        openFavoriteListModal,
        closeFavoriteListModal,
    } = useFavoriteFavoriteCommentModalIcon();

    return (
        <React.Fragment>
            <IconComponent
                icon={IoNewspaperOutline}
                onclick={openFavoriteListModal}
                size="25%"
                style={{ color: "white" }}
                onMouseEnter={openFavoriteListNav}
                onMouseLeave={closeFavoriteListNav}
            />
            <BlockNavDiv
                isDisplay={isOpenFavoriteListNav}
            >
                お気に入りリスト
            </BlockNavDiv>
            {
                // お気に入りコメントリスト
                isOpenFavoriteListModal &&
                <ModalComponent
                    modalIsOpen={isOpenFavoriteListModal}
                    closeModal={closeFavoriteListModal}
                    style={{
                        backgroundColor: "#181a1e",
                        borderRadius: "1%",
                        border: "solid 1px",
                    }}
                >
                    <FavoriteFavoriteComment
                        close={closeFavoriteListModal}
                    />
                </ModalComponent>
            }
            {
                isOpenFavoriteListModal &&
                <OverlayDiv />
            }
        </React.Fragment>

    );
}