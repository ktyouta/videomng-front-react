import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconType } from "react-icons";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import { BUTTON_HOVER_ACCENT_COLOR } from "../consts/ButtonInteractionConst";
import { Z_INDEX_PARAM } from "../consts/CommonConst";
import { MEDIA } from "../consts/MediaConst";
import "../styles/css/ModalPortal.css";
import { IconComponent } from "./IconComponent";


type ThemeType = "dark" | "light";

// 枠の背景グラデーション（オーバーレイがほぼ黒のため微妙な明暗で光源感を出す）
const MODAL_BACKGROUND_GRADIENT = "linear-gradient(180deg, #22252c, #1a1c22)";

// 枠の縁（白系の淡いグロー/リング。オーバーレイがほぼ黒のため黒い影は機能しない）
const MODAL_GLOW_SHADOW = "0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 24px rgba(255, 255, 255, 0.06)";

// 閉じるボタンのサイズ（モバイル）
const MODAL_CLOSE_ICON_SIZE_MOBILE = "15px";

// 閉じるボタンのサイズ（タブレット・PC）
const MODAL_CLOSE_ICON_SIZE_LARGE = "22px";

// ヘッダ内容と区切り線の間隔
const MODAL_HEADER_PADDING_BOTTOM = "22px";

// ボディ内容と区切り線の間隔（上下）
const MODAL_BODY_PADDING_VERTICAL = "35px";

// フッタ内容と区切り線の間隔
const MODAL_FOOTER_PADDING_TOP = "22px";

// ヘッダのアイコンとタイトルの間隔
const MODAL_HEADER_ICON_GAP = "10px";

// ボディ内の要素間隔
const MODAL_BODY_GAP = "16px";

// フッタ内のボタン間隔
const MODAL_FOOTER_BUTTON_GAP = "12px";

// ヘッダ/フッタの区切り線色（ダーク背景用。白ベースの淡い色でないと黒背景に同化する）
const MODAL_DIVIDER_COLOR_DARK = "rgba(255, 255, 255, 0.08)";

// ヘッダ/フッタの区切り線色（ライト背景用。黒ベースの淡い色でないと明るい背景に同化する）
const MODAL_DIVIDER_COLOR_LIGHT = "rgba(0, 0, 0, 0.08)";

// ヘッダ/ボディのテキスト色（ダーク背景用）
const MODAL_TEXT_COLOR_DARK = "white";

// ヘッダ/ボディのテキスト色（ライト背景用）
const MODAL_TEXT_COLOR_LIGHT = "black";

// タイトルのフォントサイズ（モバイル）
const MODAL_TITLE_FONT_SIZE_MOBILE = "12px";

// タイトルのフォントサイズ（タブレット縦向き）
const MODAL_TITLE_FONT_SIZE_TABLET_PORTRAIT = "13px";

// タイトルのフォントサイズ（タブレット横向き・PC）
const MODAL_TITLE_FONT_SIZE_LARGE = "16px";

// 本文のフォントサイズ（モバイル）
const MODAL_BODY_FONT_SIZE_MOBILE = "12px";

// 本文のフォントサイズ（タブレット縦向き）
const MODAL_BODY_FONT_SIZE_TABLET_PORTRAIT = "13px";

// 本文のフォントサイズ（タブレット横向き・PC）
const MODAL_BODY_FONT_SIZE_LARGE = "16px";

function resolveDividerColor(theme: ThemeType) {

    if (theme === "light") {
        return MODAL_DIVIDER_COLOR_LIGHT;
    }

    return MODAL_DIVIDER_COLOR_DARK;
}

function resolveTextColor(theme: ThemeType) {

    if (theme === "light") {
        return MODAL_TEXT_COLOR_LIGHT;
    }

    return MODAL_TEXT_COLOR_DARK;
}

// ヘッダ（内部部品）

type ModalHeaderPropsType = {
    children: ReactNode,
    icon?: IconType,
    theme: ThemeType,
}

const ModalHeaderRoot = styled.div<{ dividerColor: string }>`
  display: flex;
  align-items: center;
  gap: ${MODAL_HEADER_ICON_GAP};
  padding-bottom: ${MODAL_HEADER_PADDING_BOTTOM};
  border-bottom: 1px solid ${({ dividerColor }) => dividerColor};
`;

const ModalTitleSpan = styled.span<{ textColor: string }>`
  font-weight: 600;
  color: ${({ textColor }) => textColor};
  font-size: ${MODAL_TITLE_FONT_SIZE_MOBILE};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${MODAL_TITLE_FONT_SIZE_TABLET_PORTRAIT};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${MODAL_TITLE_FONT_SIZE_LARGE};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${MODAL_TITLE_FONT_SIZE_LARGE};
  }
`;

function ModalHeader(props: ModalHeaderPropsType) {

    const textColor = resolveTextColor(props.theme);

    return (
        <ModalHeaderRoot dividerColor={resolveDividerColor(props.theme)}>
            {
                props.icon &&
                <IconComponent
                    icon={props.icon}
                    bgColor={textColor}
                    style={{ fontSize: "1.2em" }}
                />
            }
            <ModalTitleSpan textColor={textColor}>
                {props.children}
            </ModalTitleSpan>
        </ModalHeaderRoot>
    );
}

// ボディ（内部部品）

type ModalBodyPropsType = {
    children: ReactNode,
    theme: ThemeType,
    // 独自のスクロール領域を内部に持つコンテンツは"hidden"を指定し、ボディ自体はスクロールさせない
    overflowY: "auto" | "hidden",
    style?: CSSProperties,
}

const ModalBodyRoot = styled.div<{ overflowY: "auto" | "hidden", textColor: string }>`
  flex: 1;
  min-height: 0;
  padding: ${MODAL_BODY_PADDING_VERTICAL} 0;
  overflow-y: ${({ overflowY }) => overflowY};
  color: ${({ textColor }) => textColor};
  display: flex;
  flex-direction: column;
  gap: ${MODAL_BODY_GAP};
  font-size: ${MODAL_BODY_FONT_SIZE_MOBILE};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${MODAL_BODY_FONT_SIZE_TABLET_PORTRAIT};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${MODAL_BODY_FONT_SIZE_LARGE};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${MODAL_BODY_FONT_SIZE_LARGE};
  }
`;

function ModalBody(props: ModalBodyPropsType) {

    return (
        <ModalBodyRoot
            overflowY={props.overflowY}
            textColor={resolveTextColor(props.theme)}
            style={props.style}
        >
            {props.children}
        </ModalBodyRoot>
    );
}

// フッタ（内部部品）

type ModalFooterPropsType = {
    children: ReactNode,
    theme: ThemeType,
}

const ModalFooterRoot = styled.div<{ dividerColor: string }>`
  display: flex;
  justify-content: flex-end;
  gap: ${MODAL_FOOTER_BUTTON_GAP};
  padding-top: ${MODAL_FOOTER_PADDING_TOP};
  border-top: 1px solid ${({ dividerColor }) => dividerColor};
`;

function ModalFooter(props: ModalFooterPropsType) {

    return (
        <ModalFooterRoot dividerColor={resolveDividerColor(props.theme)}>
            {props.children}
        </ModalFooterRoot>
    );
}

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
    // ヘッダに表示するタイトル（指定時のみヘッダ骨格を描画する）
    title?: ReactNode,
    // タイトル横に表示するアイコン
    titleIcon?: IconType,
    // フッタに表示する内容（指定時のみフッタ骨格を描画する）
    footer?: ReactNode,
    // ヘッダ/ボディ/フッタの明暗
    theme?: ThemeType,
    // ボディのスクロール挙動
    bodyOverflowY?: "auto" | "hidden",
    // ボディに追加するスタイル
    bodyStyle?: CSSProperties,
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
  padding: 23px;
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

    const theme = props.theme ?? "dark";

    // タイトルまたはフッタが指定された場合のみヘッダ/ボディ/フッタの骨格を描画する
    const hasSkeleton = props.title !== undefined || props.footer !== undefined;

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
                                        style={{ color: isCloseHover ? BUTTON_HOVER_ACCENT_COLOR : resolveTextColor(theme) }}
                                        onMouseEnter={() => setIsCloseHover(true)}
                                        onMouseLeave={() => setIsCloseHover(false)}
                                    />
                                </CloseIconAreaDiv>
                            }
                            {
                                hasSkeleton ?
                                    <React.Fragment>
                                        {
                                            props.title !== undefined &&
                                            <ModalHeader icon={props.titleIcon} theme={theme}>
                                                {props.title}
                                            </ModalHeader>
                                        }
                                        <ModalBody
                                            theme={theme}
                                            overflowY={props.bodyOverflowY ?? "auto"}
                                            style={props.bodyStyle}
                                        >
                                            {props.children}
                                        </ModalBody>
                                        {
                                            props.footer !== undefined &&
                                            <ModalFooter theme={theme}>
                                                {props.footer}
                                            </ModalFooter>
                                        }
                                    </React.Fragment>
                                    :
                                    props.children
                            }
                        </ModalContainer>
                    </Overlay>,
                    modalRoot
                )
            }
        </React.Fragment>
    );
}
