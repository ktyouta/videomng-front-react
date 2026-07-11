import React from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { IconComponent } from "../../../components/IconComponent";
import { MEDIA } from "../../../consts/MediaConst";
import { useBackToTopIcon } from "../hooks/useBackToTopIcon";

const BUTTON_COLOR = "#1d4ed8";
const BUTTON_HOVER_COLOR = "#1e40af";
const BUTTON_SIZE_MOBILE = "40px";
const BUTTON_SIZE_DEFAULT = "44px";
const BUTTON_CORNER_RADIUS = "8px";

const Parent = styled.div`
    position: fixed;
    bottom: 20px;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${BUTTON_COLOR};
    color: #fff;
    border: none;
    border-radius: ${BUTTON_CORNER_RADIUS};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    width: ${BUTTON_SIZE_MOBILE};
    height: ${BUTTON_SIZE_MOBILE};
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${BUTTON_HOVER_COLOR};
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        right: 20px;
        width: ${BUTTON_SIZE_DEFAULT};
        height: ${BUTTON_SIZE_DEFAULT};
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        right: 20px;
        width: ${BUTTON_SIZE_DEFAULT};
        height: ${BUTTON_SIZE_DEFAULT};
    }

    @media (min-width: ${MEDIA.PC}) {
        right: 20px;
        width: ${BUTTON_SIZE_DEFAULT};
        height: ${BUTTON_SIZE_DEFAULT};
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
                <Parent
                    onClick={backToTop}
                >
                    <IconComponent
                        icon={FaArrowUp}
                        size="50%"
                    />
                </Parent>
            }
        </React.Fragment>
    );
}