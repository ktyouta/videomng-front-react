import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import { BUTTON_HOVER_ACCENT_COLOR } from "../consts/ButtonInteractionConst";
import { Z_INDEX_PARAM } from "../consts/CommonConst";
import { MEDIA } from "../consts/MediaConst";
import { MODAL_BACKGROUND_GRADIENT, MODAL_CLOSE_ICON_SIZE_LARGE, MODAL_CLOSE_ICON_SIZE_MOBILE, MODAL_GLOW_SHADOW } from "../consts/ModalConst";
import "../styles/css/ModalPortal.css";
import { IconComponent } from "./IconComponent";


type basePropsType = {
    children: ReactNode,
    orverlayStyle?: CSSProperties,
    containerStyle?: CSSProperties,
    zindex?: number,
    isOpen: boolean,
    modalMinHeight?: string,
    modalWidth?: string,
    close?: () => void,
    hideCloseButton?: boolean,
}

type CloseableProps = {
    isCloseOuter: true;
    close: () => void;
} & basePropsType;

type NonCloseableProps = {
    isCloseOuter?: false;
} & basePropsType;

const Overlay = styled.div<{ zIndex?: number }>`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${({ zIndex }) => zIndex ?? Z_INDEX_PARAM.MODAL_OVERLAY};
`;

const ModalContainer = styled.div<{ modalMinHeight?: string, modalWidth?: string, }>`
  position: relative;
  background: ${MODAL_BACKGROUND_GRADIENT};
  border-radius: 6px;
  padding: 20px;
  min-height: ${({ modalMinHeight }) => modalMinHeight ?? `auto`};
  max-height:90%;
  width: ${({ modalWidth }) => modalWidth ?? `73%`};
  box-shadow: ${MODAL_GLOW_SHADOW};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const CloseIconAreaDiv = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  width: ${MODAL_CLOSE_ICON_SIZE_MOBILE};
  height: ${MODAL_CLOSE_ICON_SIZE_MOBILE};
  box-sizing: border-box;
  z-index: 1;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: ${MODAL_CLOSE_ICON_SIZE_LARGE};
    height: ${MODAL_CLOSE_ICON_SIZE_LARGE};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: ${MODAL_CLOSE_ICON_SIZE_LARGE};
    height: ${MODAL_CLOSE_ICON_SIZE_LARGE};
  }

  @media (min-width: ${MEDIA.PC}) {
    width: ${MODAL_CLOSE_ICON_SIZE_LARGE};
    height: ${MODAL_CLOSE_ICON_SIZE_LARGE};
  }
`;

export function ModalPortal(props: CloseableProps | NonCloseableProps) {

    const [isCloseHover, setIsCloseHover] = useState(false);

    // モーダル展開中に背景要素のスクロールを停止する
    useEffect(() => {
        const className = "html-modal-open";

        if (props.isOpen) {
            document.documentElement.classList.add(className);
        } else {
            document.documentElement.classList.remove(className);
        }

        return () => {
            document.documentElement.classList.remove(className);
        };
    }, [props.isOpen]);

    const modalRoot = document.getElementById("modal-root");

    if (!modalRoot) {
        return null;
    }

    return (
        <React.Fragment>
            {
                props.isOpen &&
                createPortal(
                    <Overlay
                        style={props.orverlayStyle}
                        zIndex={props.zindex}
                        onClick={() => {
                            if (props.isCloseOuter) {
                                props.close();
                            }
                        }}
                    >
                        <ModalContainer
                            style={props.containerStyle}
                            modalMinHeight={props.modalMinHeight}
                            modalWidth={props.modalWidth}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {
                                props.close && !props.hideCloseButton &&
                                <CloseIconAreaDiv>
                                    <IconComponent
                                        icon={RxCross1}
                                        onclick={props.close}
                                        size="100%"
                                        style={{ color: isCloseHover ? BUTTON_HOVER_ACCENT_COLOR : "white" }}
                                        onMouseEnter={() => setIsCloseHover(true)}
                                        onMouseLeave={() => setIsCloseHover(false)}
                                    />
                                </CloseIconAreaDiv>
                            }
                            {props.children}
                        </ModalContainer>
                    </Overlay>,
                    modalRoot
                )
            }
        </React.Fragment>
    );
}