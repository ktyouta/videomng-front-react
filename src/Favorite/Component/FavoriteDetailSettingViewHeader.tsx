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
  height:4%;
  padding-right: 2%;
`;

type propsType = {
  changeEdit: () => void,
}

export function FavoriteDetailSettingViewHeader(props: propsType) {

  console.log("FavoriteDetailSettingViewHeader render");

  return (
    <HeaderDiv>
      <FlexSpaceDiv />
      {/* 編集アイコン */}
      <FavoriteDetailSettingEditIcon
        changeEdit={props.changeEdit}
      />
    </HeaderDiv>
  );
}