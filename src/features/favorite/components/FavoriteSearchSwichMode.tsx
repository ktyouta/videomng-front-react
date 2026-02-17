import { SegmentedControl } from "../../../components/SegmentedControl";
import { FAVORITE_LIST_MODE } from "../const/FavoriteConst";

type PropsType = {
    selectedFavoriteVideoMode: string;
    switchMode: (mode: string) => void;
}

/**
 * 検索条件エリア
 */
export function FavoriteSearchSwichMode(props: PropsType) {

    console.log("FavoriteSearchSwichMode render");

    const {
        selectedFavoriteVideoMode,
        switchMode, } = props;

    return (
        <SegmentedControl
            options={Object.values(FAVORITE_LIST_MODE)}
            value={selectedFavoriteVideoMode}
            onChange={switchMode}
            outerStyle={{
                minWidth: "220px",
                marginRight: "30px",
                height: "35px",
            }}
            color="#2563eb"
        />
    );
}