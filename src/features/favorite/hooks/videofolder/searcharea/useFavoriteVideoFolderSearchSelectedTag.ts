import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { INIT_PAGE } from "../../useFavoriteVideoSearchConditionValue";
import { useTagMasterList } from "../../videolist/useTagMasterList";
import { useCreateFavoriteVideoFolderVideoListQuery } from "../useCreateFavoriteVideoFolderVideoListQuery";
import { useFavoriteVideoFolderSearchConditionValue } from "../useFavoriteVideoFolderSearchConditionValue";


export function useFavoriteVideoFolderSearchSelectedTag() {

    // 検索条件
    const {
        selectedFavoriteVideoTag,
        setSelectedFavoriteVideoTag, } = useFavoriteVideoFolderSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoFolderVideoListQuery();
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

        const tagList = selectedFavoriteVideoTag.split(`,`);
        const newTagValue = tagList.filter((e) => e !== value).join(`,`);

        const newQuery = create({
            folderVideoTag: newTagValue,
            folderPage: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoTag(newTagValue);
    }

    return {
        selectedFavoriteVideoTag,
        resetTag,
        tagMasterList,
    }
}