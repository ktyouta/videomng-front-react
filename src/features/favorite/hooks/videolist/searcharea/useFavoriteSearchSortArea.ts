import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { useSortList } from "../../../../content/hooks/useSortList";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { INIT_PAGE, useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";


export function useFavoriteSearchSortArea() {

    // 検索条件
    const searchConditionObj = useFavoriteVideoSearchConditionValue();
    // 画面サイズ判定
    const isPcLess = useMediaQuery(mediaQuery.pcLess);
    // クエリ作成用
    const { create } = useCreateFavoriteVideoListQuery(searchConditionObj);
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
            sortKey: value,
            page: INIT_PAGE
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
        isPcLess,
    }
}