import styled from "styled-components";
import { IconComponent } from "../../../../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import { useFavoriteBlockCommentModalIcon } from "../../../../Hook/VideoDetail/VideoComment/VideoBlockComment/useFavoriteBlockCommentModalIcon";
import React from "react";
import ModalComponent from "../../../../../Common/Component/ModalComponent";
import { FavoriteBlockComment } from "../VideoBlockComment/FavoriteBlockComment";
import { OverlayDiv } from "../../../../../Common/StyledComponent/OverlayDiv";
import { useFavoriteFavoriteCommentModalIcon } from "../../../../Hook/VideoDetail/VideoComment/VideoFavoriteComment/useFavoriteFavoriteCommentModalIcon";
import { IoNewspaperOutline } from "react-icons/io5";
import { FavoriteFavoriteComment } from "./FavoriteFavoriteComment";
import { MEDIA } from "../../../../../Common/Const/MediaConst";


const IconDiv = styled.div`
    margin-right: 10px;
    position: relative;
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
        isMobile,
    } = useFavoriteFavoriteCommentModalIcon();

    const modalWidth = isMobile ? "84%" : "70%";

    return (
        <React.Fragment>
            <IconDiv>
                <IconComponent
                    icon={IoNewspaperOutline}
                    onclick={openFavoriteListModal}
                    style={{
                        color: "white",
                    }}
                    onMouseEnter={openFavoriteListNav}
                    onMouseLeave={closeFavoriteListNav}
                    size="100%"
                />
                <BlockNavDiv
                    isDisplay={isOpenFavoriteListNav}
                >
                    お気に入りリスト
                </BlockNavDiv>
            </IconDiv>
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
                    isPositionCenter={true}
                    width={modalWidth}
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