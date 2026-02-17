import { useFavoriteVideoFolderSearchSwichMode } from "../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchSwichMode";
import { FavoriteSearchSwichMode } from "../../FavoriteSearchSwichMode";


/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchSwichModeContainer() {

    console.log("FavoriteVideoFolderSearchSwichModeContainer render");
    const retObj = useFavoriteVideoFolderSearchSwichMode();

    return (
        <FavoriteSearchSwichMode
            {...retObj}
        />
    );
}