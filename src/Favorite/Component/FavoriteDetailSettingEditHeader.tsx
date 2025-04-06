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
  height:4%;
  padding-right: 2%;
`;

const BlockIconDiv = styled.div`
  width: 5%;
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
`;

type propsType = {
  changeView: () => void,
  updateFavoriteVideo: () => void,
}

export function FavoriteDetailSettingEditHeader(props: propsType) {

  console.log("FavoriteDetailSettingEditHeader render");

  return (
    <HeaderDiv>
      <FlexSpaceDiv />
      <BlockIconDiv>
        {/* 閉じるアイコン */}
        <FavoriteDetailSettingCloseIcon
          changeView={props.changeView}
        />
        {/* 更新アイコン */}
        <FavoriteDetailSettingUpdateIcon
          updateFavoriteVideo={props.updateFavoriteVideo}
        />
      </BlockIconDiv>
    </HeaderDiv>
  );
}