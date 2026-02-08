import { hasKey } from "../../../../utils/CommonFunction";
import { nowSearchConditionType } from "../../components/HomeVideoNowSearchConditionValueProvider";
import { SEARCH_CONDITION } from "../../const/HomeConst";


// 更新用クエリ作成時の引数
type createNewQueryType = { [key in (typeof SEARCH_CONDITION)[keyof typeof SEARCH_CONDITION]]?: string };
type PropsType = {
    nowSearchCondition: nowSearchConditionType,
}

export function useCreateHomeVideoListQuery(props: PropsType) {

    /**
     * 更新用のクエリを作成
     * @param query 
     * @returns 
     */
    function createNewQuery(query: createNewQueryType) {

        let queryParam = ``;

        // カテゴリ
        if (hasKey(query, SEARCH_CONDITION.QUERY_KEY_CATEGORY)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, query.videoCategory);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.nowSearchCondition.category);
        }

        // キーワード
        if (hasKey(query, SEARCH_CONDITION.QUERY_KEY_KEYWORD)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_KEYWORD, query.q);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_KEYWORD, props.nowSearchCondition.keyword);
        }

        // 種別
        if (hasKey(query, SEARCH_CONDITION.QUERY_KEY_TYPE)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, query.videoType);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, props.nowSearchCondition.type);
        }

        // 次データ取得トークン
        if (hasKey(query, SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN, query.nextPageToken);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN, props.nowSearchCondition.nextPageToken);
        }

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        return queryParam;
    }

    function getNowQuery() {

        let queryParam = ``;

        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_KEYWORD, props.nowSearchCondition.keyword);
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, props.nowSearchCondition.type);
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.nowSearchCondition.category);

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