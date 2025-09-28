import { CSSProperties, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../Const/CommonConst";
import React from "react";

type propsType = {
    children: ReactNode,
    orverlayStyle?: CSSProperties,
    containerStyle?: CSSProperties,
    zindex?: number,
    isOpen: boolean,
    modalHeight?: string,
    modalWidth?: string,
};

const Overlay = styled.div<{ zIndex?: number }>`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: ${({ zIndex }) => zIndex ?? Z_INDEX_PARAM.MODAL_OVERLAY};
`;

const ModalContainer = styled.div<{ modalHeight?: string, modalWidth?: string, }>`
  position: relative;
  background-color: #181a1e;
  border-radius: 6px;
  padding: 20px;
  height: ${({ modalHeight }) => modalHeight ?? `90%`};
  width: ${({ modalWidth }) => modalWidth ?? `73%`};
  border: 1px solid white;
  box-sizing: border-box;
`;

export function ModalPortal(props: propsType) {

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
                    >
                        <ModalContainer
                            style={props.containerStyle}
                            modalHeight={props.modalHeight}
                            modalWidth={props.modalWidth}
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