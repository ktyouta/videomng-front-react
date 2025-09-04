import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH_CONDITION } from "../../Const/FavoriteConst";



export function useCreateFavoriteVideoListQuery() {

    const {
        selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey
    } = useFavoriteVideoSearchConditionValue();

    function createQuery() {

        let queryParam = ``;

        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, selectedFavoriteVideoViewStatus);
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, selectedFavoriteVideoCategory);
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TAG, selectedFavoriteVideoTag);
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_SORT, selectedFavoriteVideoSortKey);
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, selectedFavoriteVideoFavoriteLevel);

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        return queryParam;
    }

    function appendQuery(
        query: string,
        key: string,
        value: string,
    ) {

        return value ? `${query}&${key}=${value}` : query;
    }

    return {
        query: createQuery()
    };
}