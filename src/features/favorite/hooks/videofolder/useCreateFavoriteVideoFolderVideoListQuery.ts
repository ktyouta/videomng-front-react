import { hasKey } from "../../../../utils/CommonFunction";
import { FOLDER_SEARCH_CONDITION } from "../../const/FavoriteConst";


// 更新用クエリ作成時の引数
type createNewQueryType = { [key in (typeof FOLDER_SEARCH_CONDITION)[keyof typeof FOLDER_SEARCH_CONDITION]]?: string };

type PropsType = {
    selectedFavoriteVideoCategory: string;
    selectedFavoriteVideoViewStatus: string
    selectedFavoriteVideoTag: string;
    selectedFavoriteVideoFavoriteLevel: string;
    selectedFavoriteVideoSortKey: string;
    selectedFavoriteVideoPage: string;
    selectedFavoriteVideoMode: string;
    selectedFavoriteVideoFolder: string;
}

export function useCreateFavoriteVideoFolderVideoListQuery(props: PropsType) {

    /**
     * 更新用のクエリを作成
     * @param query 
     * @returns 
     */
    function createNewQuery(query: createNewQueryType) {

        let queryParam = ``;

        // カテゴリ
        if (hasKey(query, FOLDER_SEARCH_CONDITION.QUERY_KEY_CATEGORY)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_CATEGORY, query.videoCategory);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.selectedFavoriteVideoCategory);
        }

        // 視聴状況
        if (hasKey(query, FOLDER_SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, query.viewStatus);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, props.selectedFavoriteVideoViewStatus);
        }

        // タグ
        if (hasKey(query, FOLDER_SEARCH_CONDITION.QUERY_KEY_TAG)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_TAG, query.videoTag);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_TAG, props.selectedFavoriteVideoTag);
        }

        // ソート
        if (hasKey(query, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT, query.sortKey);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT, props.selectedFavoriteVideoSortKey);
        }

        // お気に入り度
        if (hasKey(query, FOLDER_SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, query.favoriteLevel);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, props.selectedFavoriteVideoFavoriteLevel);
        }

        // ページ
        if (hasKey(query, FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE, query.page);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE, props.selectedFavoriteVideoPage);
        }

        // フォルダ
        if (hasKey(query, FOLDER_SEARCH_CONDITION.QUERY_KEY_FOLDER)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_FOLDER, query.folder);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_FOLDER, props.selectedFavoriteVideoFolder);
        }

        // モード
        if (hasKey(query, FOLDER_SEARCH_CONDITION.QUERY_KEY_MODE)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_MODE, query.mode);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_MODE, props.selectedFavoriteVideoMode);
        }

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        return queryParam;
    }

    function getNowQuery() {

        let queryParam = ``;

        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS, props.selectedFavoriteVideoViewStatus);
        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.selectedFavoriteVideoCategory);
        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_TAG, props.selectedFavoriteVideoTag);
        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT, props.selectedFavoriteVideoSortKey);
        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL, props.selectedFavoriteVideoFavoriteLevel);
        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE, props.selectedFavoriteVideoPage);
        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_FOLDER, props.selectedFavoriteVideoFolder);
        queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_MODE, props.selectedFavoriteVideoMode);

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