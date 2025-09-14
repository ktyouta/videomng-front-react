import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH_CONDITION } from "../../Const/HomeConst";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";

type createNewQueryType = {
    keyword?: string,
    // クエリパラメータのキー(カテゴリ)
    videocategory?: string,
    // クエリパラメータのキー(種別)
    videotype?: string,
    // クエリパラメータのキー(次データ取得用トークン)
    nextPageToken?: string
}

export function useCreateHomeVideoListQuery() {

    const {
        nowSearchCondition,
    } = useHomeVideoNowSearchConditionValue();

    function createNewQuery(props: createNewQueryType) {

        let queryParam = ``;

        if (props.videocategory) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.videocategory);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, nowSearchCondition.category);
        }

        if (props.keyword) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_KEYWORD, props.keyword);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_KEYWORD, nowSearchCondition.keyword);
        }

        if (props.videotype) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, props.videotype);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, nowSearchCondition.type);
        }

        if (props.nextPageToken) {
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
        queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN, nowSearchCondition.nextPageToken);

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