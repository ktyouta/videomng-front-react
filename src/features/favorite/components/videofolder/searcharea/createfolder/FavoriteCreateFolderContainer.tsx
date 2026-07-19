import { useFavoriteCreateFolderInFolderMain } from "../../../../hooks/videofolder/searcharea/createfolder/useFavoriteCreateFolderInFolderMain";
import { FavoriteCreateFolder } from "../../../videolist/searcharea/folder/FavoriteCreateFolder";

type propsType = {
  close: () => void;
  isMobile: boolean;
}

export function FavoriteCreateFolderContainer(props: propsType) {

  console.log("FavoriteCreateFolderContainer render");

  const retObj = useFavoriteCreateFolderInFolderMain(props);

  return (
    <FavoriteCreateFolder
      close={props.close}
      isMobile={props.isMobile}
      {...retObj}
    />
  );
}