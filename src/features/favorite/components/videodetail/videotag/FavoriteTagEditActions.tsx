import styled from "styled-components";
import BaseTextbox from "../../../../../components/BaseTextbox";
import { IconComponent } from "../../../../../components/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../../../hooks/videodetail/videomemo/useFavoriteMemoCreateInput";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FavoriteTagEditCloseIcon } from "./FavoriteTagEditCloseIcon";
import { FavoriteTagEditUpdateIcon } from "./FavoriteTagEditUpdateIcon";
import { tagType } from "../../../../../components/TagsComponent";


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