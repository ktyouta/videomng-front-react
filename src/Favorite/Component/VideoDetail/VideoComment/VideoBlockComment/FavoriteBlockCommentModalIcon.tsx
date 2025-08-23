import styled from "styled-components";
import { IconComponent } from "../../../../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import { useFavoriteBlockCommentModalIcon } from "../../../../Hook/VideoDetail/VideoComment/VideoBlockComment/useFavoriteBlockCommentModalIcon";
import React from "react";
import ModalComponent from "../../../../../Common/Component/ModalComponent";
import { FavoriteBlockComment } from "./FavoriteBlockComment";
import { OverlayDiv } from "../../../../../Common/StyledComponent/OverlayDiv";
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
        isMobile,
    } = useFavoriteBlockCommentModalIcon();

    const modalWidth = isMobile ? "84%" : "70%";

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
                    width={modalWidth}
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