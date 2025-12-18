import { useReplaceQuery } from "../../../../../hooks/useReplaceQuery";
import { useCreateFavoriteVideoListQuery } from "../../useCreateFavoriteVideoListQuery";
import { INIT_PAGE, useFavoriteVideoSearchConditionValue } from "../../useFavoriteVideoSearchConditionValue";


export function useFavoriteSearchSelectedTag() {

    // 検索条件
    const {
        selectedFavoriteVideoTag,
        setSelectedFavoriteVideoTag, } = useFavoriteVideoSearchConditionValue();
    // クエリ作成用
    const { create } = useCreateFavoriteVideoListQuery();
    // クエリパラメータ変更用
    const { replace } = useReplaceQuery();


    /**
     * 選択中のタグをリセット
     */
    function resetTag(value: string) {

        const tagList = selectedFavoriteVideoTag.split(`,`);
        const newTagValue = tagList.filter((e) => e !== value).join(`,`);

        const newQuery = create({
            videoTag: newTagValue,
            page: INIT_PAGE
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