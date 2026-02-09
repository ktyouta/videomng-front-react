import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { INIT_PAGE, useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";
import { useTagMasterList } from "../useTagMasterList";


export function useFavoriteSearchSelectedTag() {

    // 検索条件
    const searchConditionObj = useFavoriteVideoSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoListQuery(searchConditionObj);
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();
    // タグマスタリスト
    const { data: tagMasterList } = useTagMasterList({
        isGetChache: true
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