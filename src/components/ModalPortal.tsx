import React, { CSSProperties, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../consts/CommonConst";
import "../styles/css/ModalPortal.css";


type basePropsType = {
    children: ReactNode,
    orverlayStyle?: CSSProperties,
    containerStyle?: CSSProperties,
    zindex?: number,
    isOpen: boolean,
    modalMinHeight?: string,
    modalWidth?: string,
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
  background-color: #181a1e;
  border-radius: 6px;
  padding: 20px;
  min-height: ${({ modalMinHeight }) => modalMinHeight ?? `90%`};
  max-height:90%;
  width: ${({ modalWidth }) => modalWidth ?? `73%`};
  border: 1px solid white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export function ModalPortal(props: CloseableProps | NonCloseableProps) {

    const modalRoot = document.getElementById("modal-root");

    if (!modalRoot) {
        return null;
    }

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
                            {props.children}
                        </ModalContainer>
                    </Overlay>,
                    modalRoot
                )
            }
        </React.Fragment>
    );
}