import styled from "styled-components";
import { FavoriteDetailSettingCloseIcon } from "./FavoriteDetailSettingCloseIcon";
import { FavoriteDetailSettingUpdateIcon } from "./FavoriteDetailSettingUpdateIcon";


const IconOverlayDiv = styled.div`
  position: absolute;
  top: -3px;
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