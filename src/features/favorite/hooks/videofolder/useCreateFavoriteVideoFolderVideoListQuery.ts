import { hasKey } from "../../../../utils/CommonFunction";
import { FOLDER_SEARCH_CONDITION } from "../../const/FavoriteConst";
import { useFavoriteVideoFolderSearchConditionValue } from "./useFavoriteVideoFolderSearchConditionValue";


// 更新用クエリ作成時の引数
type createNewQueryType = { [key in (typeof FOLDER_SEARCH_CONDITION)[keyof typeof FOLDER_SEARCH_CONDITION]]?: string };


export function useCreateFavoriteVideoFolderVideoListQuery() {

    const {
        selectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey,
        selectedFavoriteVideoPage,
    } = useFavoriteVideoFolderSearchConditionValue();


    /**
     * 更新用のクエリを作成
     * @param props 
     * @returns 
     */
    function createNewQuery(props: createNewQueryType) {

        let queryParam = ``;

        // カテゴリ
        if (hasKey(props, FOLDER_SEARCH_CONDITION.QUERY_KEY_CATEGORY)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.folderVideocategory);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_CATEGORY, selectedFavoriteVideoCategory);
        }

        // 視聴状況
        if (hasKey(props, FOLDER_SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, props.folderViewstatus);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, selectedFavoriteVideoViewStatus);
        }

        // タグ
        if (hasKey(props, FOLDER_SEARCH_CONDITION.QUERY_KEY_TAG)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_TAG, props.folderVideotag);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_TAG, selectedFavoriteVideoTag);
        }

        // ソート
        if (hasKey(props, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT, props.folderSortkey);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT, selectedFavoriteVideoSortKey);
        }

        // お気に入り度
        if (hasKey(props, FOLDER_SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, props.folderFavoritelevel);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, selectedFavoriteVideoFavoriteLevel);
        }

        // ページ
        if (hasKey(props, FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE, props.folderPage);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE, selectedFavoriteVideoPage);
        }


        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        return queryParam;
    }

    function getNowQuery() {

        let queryParam = ``;

        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT, selectedFavoriteVideoSortKey);
        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE, selectedFavoriteVideoPage);

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