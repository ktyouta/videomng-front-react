import { SegmentedControl } from "../../../components/SegmentedControl";
import {
    DEFAULT_TAG_COLOR,
    FAVORITE_LIST_MODE,
    FAVORITE_SEARCH_AREA_BUTTON_BG,
    FAVORITE_SEARCH_AREA_LABEL_COLOR,
    FAVORITE_SEARCH_AREA_PANEL_BORDER,
} from "../const/FavoriteConst";

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
                height: "39px",
            }}
            color={DEFAULT_TAG_COLOR}
            backgroundColor={FAVORITE_SEARCH_AREA_BUTTON_BG}
            inactiveColor={FAVORITE_SEARCH_AREA_LABEL_COLOR}
            borderRadius="12px"
            showBorder={false}
            borderColor={FAVORITE_SEARCH_AREA_PANEL_BORDER}
        />
    );
}