import styled from "styled-components";
import { FavoriteTagEditCloseIcon } from "./FavoriteTagEditCloseIcon";
import { FavoriteTagEditUpdateIcon } from "./FavoriteTagEditUpdateIcon";


const IconOverlayDiv = styled.div`
  position: absolute;
  top: -5px;
  right: -2px;
  display: flex;
  align-items: center;
  z-index: 1;
`;


export function FavoriteTagEditActions() {

    console.log("FavoriteTagEditActions render");

    return (
        <IconOverlayDiv>
            {/* 閉じるアイコン */}
            <FavoriteTagEditCloseIcon />
            {/* 更新アイコン */}
            <FavoriteTagEditUpdateIcon />
        </IconOverlayDiv>
    );
}