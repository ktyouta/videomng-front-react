import { hasKey } from "../../../../utils/CommonFunction";
import { SEARCH_CONDITION } from "../../const/FavoriteConst";
import { useFavoriteVideoFolderSearchConditionValue } from "./useFavoriteVideoFolderSearchConditionValue";


// 更新用クエリ作成時の引数
type createNewQueryType = { [key in (typeof SEARCH_CONDITION)[keyof typeof SEARCH_CONDITION]]?: string };


export function useCreateFavoriteVideoFolderVideoListQuery() {

    const {
        selectedFavoriteVideoPage,
    } = useFavoriteVideoFolderSearchConditionValue();


    /**
     * 更新用のクエリを作成
     * @param props 
     * @returns 
     */
    function createNewQuery(props: createNewQueryType) {

        let queryParam = ``;

        // ページ
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_PAGE)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_PAGE, props.page);
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

        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_PAGE, selectedFavoriteVideoPage);

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