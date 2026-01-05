import React from "react";
import { HiOutlineInbox } from 'react-icons/hi';
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteBlockCommentModalIcon } from "../../../../hooks/videodetail/videocomment/videoblockcomment/useFavoriteBlockCommentModalIcon";
import { FavoriteBlockComment } from "./FavoriteBlockComment";


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
    left: -26px;
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
            <IconDiv>
                <IconComponent
                    icon={HiOutlineInbox}
                    onclick={openBlockListModal}
                    style={{
                        color: "white",
                    }}
                    onMouseEnter={openBlockListNav}
                    onMouseLeave={closeBlockListNav}
                    size="100%"
                />
                <BlockNavDiv
                    isDisplay={isOpenBlockListNav}
                >
                    非表示リスト
                </BlockNavDiv>
            </IconDiv>
            {/* 非表示コメントリスト */}
            <ModalPortal
                isOpen={isOpenBlockListModal}
                containerStyle={{
                    height: `90%`
                }}
                isCloseOuter={true}
                close={closeBlockListModal}
            >
                <FavoriteBlockComment
                    close={closeBlockListModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}