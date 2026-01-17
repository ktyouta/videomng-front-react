import { SegmentedControl } from "../../../../../components/SegmentedControl";
import { FAVORITE_LIST_MODE, FAVORITE_LIST_MODE_FOLDER } from "../../../const/FavoriteConst";
import { useFavoriteSearchSwichMode } from "../../../hooks/videolist/searcharea/useFavoriteSearchSwichMode";


/**
 * 検索条件エリア
 */
export function FavoriteSearchSwichMode() {

    console.log("FavoriteSearchSwichMode render");

    const {
        selectedFavoriteVideoMode,
        switchMode, } = useFavoriteSearchSwichMode();

    return (
        <SegmentedControl
            options={FAVORITE_LIST_MODE}
            value={selectedFavoriteVideoMode || FAVORITE_LIST_MODE_FOLDER}
            onChange={switchMode}
            outerStyle={{
                minWidth: "220px",
                marginRight: "30px",
                height: "35px",
            }}
            color="#3A7BD5"
        />
    );
}