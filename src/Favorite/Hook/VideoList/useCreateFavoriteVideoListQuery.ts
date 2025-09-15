import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH_CONDITION } from "../../Const/FavoriteConst";


type createNewQueryType = {
    viewStatus?: string,
    videoCategory?: string,
    videoTag?: string,
    sortKey?: string,
    favoriteLevel?: string,
}


export function useCreateFavoriteVideoListQuery() {

    const {
        selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey
    } = useFavoriteVideoSearchConditionValue();


    /**
     * 更新用のクエリを作成
     * @param props 
     * @returns 
     */
    function createNewQuery(props: createNewQueryType) {

        let queryParam = ``;

        if (props.videoCategory) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.videoCategory);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, selectedFavoriteVideoCategory);
        }

        if (props.viewStatus) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, props.viewStatus);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, selectedFavoriteVideoViewStatus);
        }

        if (props.videoTag) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TAG, props.videoTag);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TAG, selectedFavoriteVideoTag);
        }

        if (props.sortKey) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_SORT, props.sortKey);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_SORT, selectedFavoriteVideoSortKey);
        }

        if (props.favoriteLevel) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, props.favoriteLevel);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, selectedFavoriteVideoFavoriteLevel);
        }

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        return queryParam;
    }

    function getNowQuery() {

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
        query: getNowQuery(),
        create: createNewQuery,
    };
}