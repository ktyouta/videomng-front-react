import { useReplaceQuery } from "../../../../Common/Hook/useReplaceQuery";
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
    function resetTag() {

        const newQuery = create({
            videotag: ``,
            page: INIT_PAGE
        });

        // クエリパラメータを更新
        replace(newQuery);

        setSelectedFavoriteVideoTag(``);
    }

    return {
        selectedFavoriteVideoTag,
        resetTag,
    }
}