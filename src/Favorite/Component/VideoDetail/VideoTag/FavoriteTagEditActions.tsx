import styled from "styled-components";
import BaseTextbox from "../../../../Common/Component/BaseTextbox";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoCreateInput";
import { FlexSpaceDiv } from "../../../../Common/StyledComponent/FlexSpaceDiv";
import { FavoriteTagEditCloseIcon } from "./FavoriteTagEditCloseIcon";
import { FavoriteTagEditUpdateIcon } from "./FavoriteTagEditUpdateIcon";
import { tagType } from "../../../../Common/Component/TagsComponent";


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