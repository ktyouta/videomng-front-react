import { useFavoriteCreateFolderMain } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderMain";
import { FavoriteCreateFolder } from "./FavoriteCreateFolder";


type propsType = {
  isOpen: boolean;
  close: () => void;
  isMobile: boolean;
}

export function FavoriteCreateFolderContainer(props: propsType) {

  console.log("FavoriteCreateFolderContainer render");

  const retObj = useFavoriteCreateFolderMain(props);

  return (
    <FavoriteCreateFolder
      isOpen={props.isOpen}
      close={props.close}
      isMobile={props.isMobile}
      {...retObj}
    />
  );
}