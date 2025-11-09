import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "../videocomment/videofavoritecomment/FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "../videocomment/videoblockcomment/FavoriteBlockCommentModalIcon";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FavoriteDetailSettingEditIcon } from "./FavoriteDetailSettingEditIcon";
import { EDIT_MODE } from "../../../const/FavoriteConst";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  height: 22px;
  padding-right: 7px;
`;

type propsType = {
  changeEdit: () => void,
}

export function FavoriteDetailSettingViewActions(props: propsType) {

  console.log("FavoriteDetailSettingViewActions render");

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