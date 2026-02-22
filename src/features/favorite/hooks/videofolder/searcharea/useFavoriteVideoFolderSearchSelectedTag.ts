import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { INIT_PAGE } from "../../useFavoriteVideoSearchConditionValue";
import { useTagMasterList } from "../../videolist/useTagMasterList";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";
import { useFavoriteVideoFolderSearchConditionValue } from "../useFavoriteVideoFolderSearchConditionValue";


export function useFavoriteVideoFolderSearchSelectedTag() {

    // 検索条件
    const searchConditionObj = useFavoriteVideoFolderSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoFolderVideoListQuery(searchConditionObj);
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // タグマスタリスト
    const { data: tagMasterList } = useTagMasterList({
        isGetChache: false
    });

    /**
     * 選択中のタグをリセット
     */
    function resetTag(value: string) {

        const tagList = searchConditionObj.selectedFavoriteVideoTag.split(`,`);
        const newTagValue = tagList.filter((e) => e !== value).join(`,`);

        const newQuery = create({
            videoTag: newTagValue,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        searchConditionObj.setSelectedFavoriteVideoTag(newTagValue);
    }

    return {
        selectedFavoriteVideoTag: searchConditionObj.selectedFavoriteVideoTag,
        resetTag,
        tagMasterList,
    }
}