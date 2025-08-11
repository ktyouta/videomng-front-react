import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { useBackToTopIcon } from "../Hook/useBackToTopIcon";
import React from "react";
import { MEDIA } from "../../Common/Const/MediaConst";

const Parent = styled.div`
    position: fixed;
    bottom: 20px;
    backgroundColor: #333;
    color: #fff;
    border: none;
    borderRadius: 50%;
    cursor: pointer;
    right: 4px;
    width: 16px;
    height: 16px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        right: 20px;
        width: 23px;
        height: 23px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        right: 20px;
        width: 23px;
        height: 23px;
    }

    @media (min-width: ${MEDIA.PC}) {
        right: 20px;
        width: 23px;
        height: 23px;
    }
`;


export function BackToTopIcon() {

    console.log("BackToTopIcon render");

    const {
        isDisplayIcon,
        backToTop } = useBackToTopIcon();

    return (
        <React.Fragment>
            {
                isDisplayIcon &&
                <Parent>
                    <IconComponent
                        icon={FaArrowUp}
                        onclick={backToTop}
                        size="100%"
                    />
                </Parent>
            }
        </React.Fragment>
    );
}