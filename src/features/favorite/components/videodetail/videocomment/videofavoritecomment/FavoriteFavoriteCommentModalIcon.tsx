import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteFavoriteCommentModalIcon } from "../../../../hooks/videodetail/videocomment/videofavoritecomment/useFavoriteFavoriteCommentModalIcon";
import { FavoriteFavoriteComment } from "./FavoriteFavoriteComment";


const IconDiv = styled.div`
    margin-right: 10px;
    position: relative;
    font-size: 16px;

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
        isMobile,
        isOpenFavoriteListNav,
        openFavoriteListNav,
        closeFavoriteListNav,
        isOpenFavoriteListModal,
        openFavoriteListModal,
        closeFavoriteListModal,
    } = useFavoriteFavoriteCommentModalIcon();

    return (
        <React.Fragment>
            <IconDiv>
                <IconComponent
                    icon={IoNewspaperOutline}
                    onclick={openFavoriteListModal}
                    bgColor="white"
                    onMouseEnter={openFavoriteListNav}
                    onMouseLeave={closeFavoriteListNav}
                    hasCircleBackground
                />
                <BlockNavDiv
                    isDisplay={isOpenFavoriteListNav}
                >
                    お気に入りリスト
                </BlockNavDiv>
            </IconDiv>
            {/* お気に入りコメントリスト */}
            <ModalPortal
                isOpen={isOpenFavoriteListModal}
                modalWidth={isMobile ? `93%` : undefined}
                containerStyle={{
                    height: `90%`
                }}
                isCloseOuter={true}
                close={closeFavoriteListModal}
            >
                <FavoriteFavoriteComment />
            </ModalPortal>
        </React.Fragment>
    );
}