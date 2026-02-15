import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteCreateFolderMain } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderMain";
import { FavoriteCreateFolder } from "../../../createfolder/FavoriteCreateFolder";


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
    close: () => void;
}

export function FavoriteCreateFolderContainer(props: propsType) {

    console.log("FavoriteCreateFolderContainer render");

    const retObj = useFavoriteCreateFolderMain(props);

    return (
        <FavoriteCreateFolder
            close={props.close}
            {...retObj}
        />
    );
}