import { hasKey } from "../../../../utils/CommonFunction";
import { FOLDER_SEARCH_CONDITION } from "../../const/FavoriteConst";
import { useFavoriteVideoFolderSearchConditionValue } from "./useFavoriteVideoFolderSearchConditionValue";


// 更新用クエリ作成時の引数
type createNewQueryType = { [key in (typeof FOLDER_SEARCH_CONDITION)[keyof typeof FOLDER_SEARCH_CONDITION]]?: string };


export function useCreateFavoriteVideoFolderListQuery() {

    const {
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

        // ソート
        if (hasKey(props, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT)) {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT, props.folderSortkey);
        }
        else {
            queryParam = appendQuery(queryParam, FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT, selectedFavoriteVideoSortKey);
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