import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { FolderMasterType } from "../../../../types/videolist/FolderMasterType";
import { FavoriteUpdateFolderHeader } from "./FavoriteUpdateFolderHeader";
import { FavoriteUpdateFolderMain } from "./FavoriteUpdateFolderMain";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

type propsType = {
  close: () => void,
  folder: FolderMasterType,
}

export function FavoriteUpdateFolder(props: propsType) {

  console.log("FavoriteUpdateFolder render");

  return (
    <Parent>
      {/* ヘッダ */}
      <FavoriteUpdateFolderHeader
        close={props.close}
      />
      {/* コンテンツ */}
      <FavoriteUpdateFolderMain
        folder={props.folder}
        close={props.close}
      />
    </Parent>
  );
}