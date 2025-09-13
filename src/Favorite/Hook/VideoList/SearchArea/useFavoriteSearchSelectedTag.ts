import { useFavoriteVideoSearchConditionValue } from "../useFavoriteVideoSearchConditionValue";


export function useFavoriteSearchSelectedTag() {

    // 検索条件
    const {
        selectedFavoriteVideoTag,
        selectedFavoriteVideoSortKey, } = useFavoriteVideoSearchConditionValue();

    return {
        selectedFavoriteVideoTag,
        selectedFavoriteVideoSortKey,
    }
}