import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "./FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "./FavoriteBlockCommentModalIcon";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { FavoriteDetailSettingEditIcon } from "./FavoriteDetailSettingEditIcon";
import { EDIT_MODE } from "../Const/FavoriteConst";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:10%;
  padding-right: 2%;
`;

const BlockIconDiv = styled.div`
  width: 3%;
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
`;

type propsType = {
  changeEdit: () => void,
}

export function FavoriteTagViewHeader(props: propsType) {

  console.log("FavoriteTagViewHeader render");

  return (
    <HeaderDiv>
      <FlexSpaceDiv />
      <BlockIconDiv>
        {/* 編集アイコン */}
        <FavoriteDetailSettingEditIcon
          changeEdit={props.changeEdit}
        />
      </BlockIconDiv>
    </HeaderDiv>
  );
}