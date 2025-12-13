import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { INIT_PAGE } from "../../useFavoriteVideoSearchConditionValue";
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


    /**
     * 選択中のタグをリセット
     */
    function resetTag(value: string) {

        const tagList = selectedFavoriteVideoTag.split(`,`);
        const newTagValue = tagList.filter((e) => e !== value).join(`,`);

        const newQuery = create({
            folderVideotag: newTagValue,
            folderPage: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoTag(newTagValue);
    }

    return {
        selectedFavoriteVideoTag,
        resetTag,
    }
}