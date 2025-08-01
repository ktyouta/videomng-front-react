import React, { ReactElement, ReactNode, useEffect } from 'react';
import Modal from 'react-modal';
import { IconType } from 'react-icons';
import { CSSProperties } from 'styled-components';
import { Z_INDEX_PARAM } from '../Const/CommonConst';
import "../css/ModalComponent.css";


//引数の型
type propsType = {
    modalIsOpen: boolean,
    closeModal?: () => void,
    children: ReactNode,
    width?: string,
    height?: string,
    positionTop?: string,
    positionLeft?: string,
    style?: CSSProperties,
    isPositionCenter?: boolean,
}

const centerPositionStyle: CSSProperties = {
    position: `fixed`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
}

function ModalComponent(props: propsType) {

    // モーダル展開中に背景要素のスクロールを停止する
    useEffect(() => {
        const className = "html-modal-open";

        if (props.modalIsOpen) {
            document.documentElement.classList.add(className);
        } else {
            document.documentElement.classList.remove(className);
        }

        return () => {
            document.documentElement.classList.remove(className);
        };
    }, [props.modalIsOpen]);

    const style = props.isPositionCenter ? { ...centerPositionStyle, ...props.style } : props.style;

    return (
        <Modal
            isOpen={props.modalIsOpen}
            //onAfterOpen={props.openModal}
            onRequestClose={props.closeModal}
            style={{
                content: {
                    position: 'fixed',
                    top: props.positionTop ?? '5%',
                    left: props.positionLeft ?? '14%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    width: props.width ?? '70%',
                    height: props.height ?? '85%',
                    zIndex: Z_INDEX_PARAM.MODAL,
                    ...style
                }
            }}
            ariaHideApp={false}
            contentLabel="Example Modal"
            overlayClassName="Overlay"
        >
            {props.children}
        </Modal>
    );
}

export default ModalComponent;