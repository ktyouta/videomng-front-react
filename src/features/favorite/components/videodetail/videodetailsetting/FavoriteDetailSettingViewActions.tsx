import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "../videocomment/videofavoritecomment/FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "../videocomment/videoblockcomment/FavoriteBlockCommentModalIcon";
import { FavoriteDetailSettingEditIcon } from "./FavoriteDetailSettingEditIcon";
import { EDIT_MODE } from "../../../const/FavoriteConst";


const IconOverlayDiv = styled.div`
  position: absolute;
  top: -5px;
  right: -2px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

type propsType = {
  changeEdit: () => void,
}

export function FavoriteDetailSettingViewActions(props: propsType) {

  console.log("FavoriteDetailSettingViewActions render");

  return (
    <IconOverlayDiv>
      {/* 編集アイコン */}
      <FavoriteDetailSettingEditIcon
        changeEdit={props.changeEdit}
      />
    </IconOverlayDiv>
  );
}