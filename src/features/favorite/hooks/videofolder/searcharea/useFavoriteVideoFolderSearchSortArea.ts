import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { useSortList } from "../../../../content/hooks/useSortList";
import { INIT_PAGE } from "../../useFavoriteVideoSearchConditionValue";
import { useCreateFavoriteVideoFolderListQuery } from "../useCreateFavoriteVideoFolderListQuery";
import { useFavoriteVideoFolderSearchConditionValue } from "../useFavoriteVideoFolderSearchConditionValue";


export function useFavoriteVideoFolderSearchSortArea() {

    // 検索条件
    const {
        selectedFavoriteVideoSortKey,
        setSelectedFavoriteVideoSortKey,
        resetPage } = useFavoriteVideoFolderSearchConditionValue();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);
    // クエリ作成用
    const { create } = useCreateFavoriteVideoFolderListQuery();
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
            folderSortkey: value,
            folderPage: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoSortKey(value);
        resetPage();
    }

    return {
        sortList,
        selectSort,
        selectedFavoriteVideoSortKey,
        isMobile,
    }
}