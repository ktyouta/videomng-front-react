import React from "react";
import { HiOutlineInbox } from 'react-icons/hi';
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteBlockCommentModalIcon } from "../../../../hooks/videodetail/videocomment/videoblockcomment/useFavoriteBlockCommentModalIcon";
import { FavoriteBlockComment } from "./FavoriteBlockComment";


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
        isMobile,
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
                    bgColor="white"
                    onMouseEnter={openBlockListNav}
                    onMouseLeave={closeBlockListNav}
                    hasCircleBackground
                />
                <BlockNavDiv
                    isDisplay={isOpenBlockListNav}
                >
                    非表示リスト
                </BlockNavDiv>
            </IconDiv>
            {/* 非表示コメントリスト（閉じている間はコメント取得を走らせないため未マウントにする） */}
            {
                isOpenBlockListModal &&
                <FavoriteBlockComment
                    isOpen={isOpenBlockListModal}
                    close={closeBlockListModal}
                    isMobile={isMobile}
                />
            }
        </React.Fragment>
    );
}