import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH_CONDITION } from "../../Const/HomeConst";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";



export function useCreateHomeVideoListQuery() {

    const {
        nowSearchCondition,
    } = useHomeVideoNowSearchConditionValue();

    function createQuery() {

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
        query: createQuery()
    };
}