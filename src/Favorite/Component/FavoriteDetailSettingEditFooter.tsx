import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "./FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "./FavoriteBlockCommentModalIcon";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";
import { FavoriteDetailSettingEditIcon } from "./FavoriteDetailSettingEditIcon";
import { EDIT_MODE } from "../Const/FavoriteConst";
import { FavoriteDetailSettingCloseIcon } from "./FavoriteDetailSettingCloseIcon";
import { FavoriteDetailSettingUpdateIcon } from "./FavoriteDetailSettingUpdateIcon";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height: 25px;
  padding-right: 2%;
`;

type propsType = {
  changeView: () => void,
  updateFavoriteVideo: () => void,
}

export function FavoriteDetailSettingEditFooter(props: propsType) {

  console.log("FavoriteDetailSettingEditFooter render");

  return (
    <HeaderDiv>
      <FlexSpaceDiv />
      {/* 閉じるアイコン */}
      <FavoriteDetailSettingCloseIcon
        changeView={props.changeView}
      />
      {/* 更新アイコン */}
      <FavoriteDetailSettingUpdateIcon
        updateFavoriteVideo={props.updateFavoriteVideo}
      />
    </HeaderDiv>
  );
}