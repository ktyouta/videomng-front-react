import styled from "styled-components";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FavoriteTagEditCloseIcon } from "./FavoriteTagEditCloseIcon";
import { FavoriteTagEditUpdateIcon } from "./FavoriteTagEditUpdateIcon";


const MemoInputAreaDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display:flex;
  align-items: center;
  height: 22px;
  padding-right: 7px;
`;


export function FavoriteTagEditActions() {

    console.log("FavoriteTagEditActions render");

    return (
        <MemoInputAreaDiv>
            <FlexSpaceDiv />
            {/* 閉じるアイコン */}
            <FavoriteTagEditCloseIcon />
            {/* 更新アイコン */}
            <FavoriteTagEditUpdateIcon />
        </MemoInputAreaDiv>
    );
}