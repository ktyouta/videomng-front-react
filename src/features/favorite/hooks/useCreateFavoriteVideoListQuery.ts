import { VIDEO_MNG_PATH } from "../../../consts/CommonConst";
import { useFavoriteVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH_CONDITION } from "../const/FavoriteConst";
import { hasKey } from "../../../utils/CommonFunction";


// 更新用クエリ作成時の引数
type createNewQueryType = { [key in (typeof SEARCH_CONDITION)[keyof typeof SEARCH_CONDITION]]?: string };


export function useCreateFavoriteVideoListQuery() {

    const {
        selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey,
        selectedFavoriteVideoPage,
        selectedFavoriteVideoShowFolder,
    } = useFavoriteVideoSearchConditionValue();


    /**
     * 更新用のクエリを作成
     * @param props 
     * @returns 
     */
    function createNewQuery(props: createNewQueryType) {

        let queryParam = ``;

        // カテゴリ
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_CATEGORY)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.videocategory);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, selectedFavoriteVideoCategory);
        }

        // 視聴状況
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, props.viewstatus);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, selectedFavoriteVideoViewStatus);
        }

        // タグ
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_TAG)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TAG, props.videotag);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TAG, selectedFavoriteVideoTag);
        }

        // ソート
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_SORT)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_SORT, props.sortkey);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_SORT, selectedFavoriteVideoSortKey);
        }

        // お気に入り度
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, props.favoritelevel);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, selectedFavoriteVideoFavoriteLevel);
        }

        // ページ
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_PAGE)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_PAGE, props.page);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_PAGE, selectedFavoriteVideoPage);
        }

        // フォルダ表示フラグ
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_SHOW_FOLDER)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_SHOW_FOLDER, props.showfolder);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_PAGE, selectedFavoriteVideoPage);
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
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_PAGE, selectedFavoriteVideoPage);
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_SHOW_FOLDER, selectedFavoriteVideoShowFolder);

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        return queryParam;
    }

    function appendQuery(
        query: string,
        key: string,
        value: string | undefined,
    ) {
        return value ? `${query}&${key}=${value}` : query;
    }

    return {
        query: getNowQuery(),
        create: createNewQuery,
    };
}