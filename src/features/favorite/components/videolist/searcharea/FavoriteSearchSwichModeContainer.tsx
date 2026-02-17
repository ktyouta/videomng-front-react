import { useFavoriteSearchSwichMode } from "../../../hooks/videolist/searcharea/useFavoriteSearchSwichMode";
import { FavoriteSearchSwichMode } from "../../FavoriteSearchSwichMode";


/**
 * 検索条件エリア
 */
export function FavoriteSearchSwichModeContainer() {

    console.log("FavoriteSearchSwichModeContainer render");
    const retObj = useFavoriteSearchSwichMode();

    return (
        <FavoriteSearchSwichMode
            {...retObj}
        />
    );
}