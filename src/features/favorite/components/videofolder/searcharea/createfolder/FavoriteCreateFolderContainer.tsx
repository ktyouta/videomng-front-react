import { useFavoriteCreateFolderInFolderMain } from "../../../../hooks/videofolder/searcharea/createfolder/useFavoriteCreateFolderInFolderMain";
import { FavoriteCreateFolder } from "../../../FavoriteCreateFolder";

type propsType = {
  close: () => void;
}

export function FavoriteCreateFolderContainer(props: propsType) {

  console.log("FavoriteCreateFolderContainer render");

  const retObj = useFavoriteCreateFolderInFolderMain(props);

  return (
    <FavoriteCreateFolder
      close={props.close}
      {...retObj}
    />
  );
}