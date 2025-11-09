import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "../videocomment/videofavoritecomment/FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "../videocomment/videoblockcomment/FavoriteBlockCommentModalIcon";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";
import { FavoriteDetailSettingEditIcon } from "./FavoriteDetailSettingEditIcon";
import { EDIT_MODE } from "../../../const/FavoriteConst";
import { FavoriteDetailSettingCloseIcon } from "./FavoriteDetailSettingCloseIcon";
import { FavoriteDetailSettingUpdateIcon } from "./FavoriteDetailSettingUpdateIcon";


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
  changeView: () => void,
  updateFavoriteVideo: () => void,
}

export function FavoriteDetailSettingEditActions(props: propsType) {

  console.log("FavoriteDetailSettingEditActions render");

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