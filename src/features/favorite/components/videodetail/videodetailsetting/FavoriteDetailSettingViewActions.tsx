import styled from "styled-components";
import { FavoriteDetailSettingEditIcon } from "./FavoriteDetailSettingEditIcon";


const IconOverlayDiv = styled.div`
  position: absolute;
  top: -3px;
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