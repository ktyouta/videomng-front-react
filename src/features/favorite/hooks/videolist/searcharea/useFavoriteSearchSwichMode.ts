import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { INIT_PAGE, useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";

export function useFavoriteSearchSwichMode() {

    // 検索条件
    const searchConditionObj = useFavoriteVideoSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoListQuery(searchConditionObj);
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();

    /**
     * 表示モード切替
     * @param mode 
     */
    function switchMode(mode: string) {

        const newQuery = create({
            mode: mode,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        searchConditionObj.setSlectedFavoriteVideoMode(mode);
        searchConditionObj.resetPage();
    }

    return {
        selectedFavoriteVideoMode: searchConditionObj.selectedFavoriteVideoMode,
        switchMode,
    };
}