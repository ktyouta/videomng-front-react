import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "../VideoComment/VideoFavoriteComment/FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "../VideoComment/VideoBlockComment/FavoriteBlockCommentModalIcon";
import { FlexSpaceDiv } from "../../../../Common/StyledComponent/FlexSpaceDiv";
import { FavoriteDetailSettingEditIcon } from "./FavoriteDetailSettingEditIcon";
import { EDIT_MODE } from "../../../Const/FavoriteConst";


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