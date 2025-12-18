import { hasKey } from "../../../../utils/CommonFunction";
import { SEARCH_CONDITION } from "../../const/HomeConst";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";


// 更新用クエリ作成時の引数
type createNewQueryType = { [key in (typeof SEARCH_CONDITION)[keyof typeof SEARCH_CONDITION]]?: string };


export function useCreateHomeVideoListQuery() {

    const {
        nowSearchCondition,
    } = useHomeVideoNowSearchConditionValue();


    /**
     * 更新用のクエリを作成
     * @param props 
     * @returns 
     */
    function createNewQuery(props: createNewQueryType) {

        let queryParam = ``;

        // カテゴリ
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_CATEGORY)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.videoCategory);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, nowSearchCondition.category);
        }

        // キーワード
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_KEYWORD)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_KEYWORD, props.q);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_KEYWORD, nowSearchCondition.keyword);
        }

        // 種別
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_TYPE)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, props.videoType);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, nowSearchCondition.type);
        }

        // 次データ取得トークン
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN, props.nextPageToken);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN, nowSearchCondition.nextPageToken);
        }

        if (queryParam) {
            queryParam = `?${queryParam.slice(1)}`;
        }

        return queryParam;
    }

    function getNowQuery() {

        let queryParam = ``;

        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, nowSearchCondition.category);
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_KEYWORD, nowSearchCondition.keyword);
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, nowSearchCondition.type);

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