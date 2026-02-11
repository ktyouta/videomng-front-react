import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { useSortList } from "../../../../content/hooks/useSortList";
import { INIT_PAGE } from "../../useFavoriteVideoSearchConditionValue";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";
import { useFavoriteVideoFolderSearchConditionValue } from "../useFavoriteVideoFolderSearchConditionValue";


export function useFavoriteVideoFolderSearchSortArea() {

    // 検索条件
    const searchConditionObj = useFavoriteVideoFolderSearchConditionValue();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.pcLess);
    // クエリ作成用
    const { create } = useCreateFavoriteVideoFolderVideoListQuery(searchConditionObj);
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // ソートリストを取得
    const { data: sortList } = useSortList({
        isGetChache: true
    });

    /**
     * ソートリスト選択
     * @param value 
     */
    function selectSort(value: string) {

        const newQuery = create({
            folderSortKey: value,
            folderPage: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        searchConditionObj.setSelectedFavoriteVideoSortKey(value);
        searchConditionObj.resetPage();
    }

    return {
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey: searchConditionObj.selectedFavoriteVideoSortKey,
        isMobile,
    }
}