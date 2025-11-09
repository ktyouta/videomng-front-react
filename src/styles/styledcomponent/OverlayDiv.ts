import styled from "styled-components";
import { Z_INDEX_PARAM } from "../../consts/CommonConst";

// モーダルオープン時の背景のスタイル
export const OverlayDiv = styled.div<{ bgColor?: string }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ bgColor }) => (bgColor ?? "black")};
    opacity: 0.9;
    z-index:${Z_INDEX_PARAM.MODAL_OVERLAY}
`;