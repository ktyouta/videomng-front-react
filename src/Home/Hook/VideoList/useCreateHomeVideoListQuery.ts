import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH_CONDITION } from "../../Const/HomeConst";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";
import { hasKey } from "../../../Common/Function/CommonFunction";


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
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_CATEGORY, props.videocategory);
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
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, props.videotype);
        }
        else {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_TYPE, nowSearchCondition.type);
        }

        // 次データ取得トークン
        if (hasKey(props, SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN)) {
            queryParam = appendQuery(queryParam, SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN, props.nextpagetoken);
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