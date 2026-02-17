import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { INIT_PAGE } from "../../useFavoriteVideoSearchConditionValue";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";
import { useFavoriteVideoFolderSearchConditionValue } from "../useFavoriteVideoFolderSearchConditionValue";

export function useFavoriteVideoFolderSearchSwichMode() {

    // 検索条件
    const searchConditionObj = useFavoriteVideoFolderSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoFolderVideoListQuery(searchConditionObj);
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();

    /**
     * 表示モード切替
     * @param mode 
     */
    function switchMode(mode: string) {

        const newQuery = create({
            folderMode: mode,
            folderPage: INIT_PAGE
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