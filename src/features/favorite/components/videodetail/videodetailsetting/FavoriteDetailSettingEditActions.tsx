import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "../videocomment/videofavoritecomment/FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "../videocomment/videoblockcomment/FavoriteBlockCommentModalIcon";
import { FavoriteDetailSettingEditIcon } from "./FavoriteDetailSettingEditIcon";
import { EDIT_MODE } from "../../../const/FavoriteConst";
import { FavoriteDetailSettingCloseIcon } from "./FavoriteDetailSettingCloseIcon";
import { FavoriteDetailSettingUpdateIcon } from "./FavoriteDetailSettingUpdateIcon";


const IconOverlayDiv = styled.div`
  position: absolute;
  top: -5px;
  right: -2px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

type propsType = {
  changeView: () => void,
  updateFavoriteVideo: () => void,
}

export function FavoriteDetailSettingEditActions(props: propsType) {

  console.log("FavoriteDetailSettingEditActions render");

  return (
    <IconOverlayDiv>
      {/* 閉じるアイコン */}
      <FavoriteDetailSettingCloseIcon
        changeView={props.changeView}
      />
      {/* 更新アイコン */}
      <FavoriteDetailSettingUpdateIcon
        updateFavoriteVideo={props.updateFavoriteVideo}
      />
    </IconOverlayDiv>
  );
}