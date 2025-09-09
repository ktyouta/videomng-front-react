import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "./useCreateHomeVideoListQuery";
import { SEARCH_CONDITION } from "../../Const/HomeConst";


export function useSyncHomeVideoListUrl() {

    // 現在の検索条件
    const { nowSearchCondition } = useHomeVideoNowSearchConditionValue();
    // 一覧画面のクエリパラメータ
    const { query } = useCreateHomeVideoListQuery();

    //ルーティング用
    const navigate = useNavigate();

    // 検索条件の変更時にURLを切り替える
    useEffect(() => {

        const params = new URLSearchParams(query.slice(1));
        // nextpagetokenはURLに表示しない
        params.delete(SEARCH_CONDITION.QUERY_KEY_NEXT_PAGE_TOKEN);
        const newQuery = "?" + params.toString();

        navigate(newQuery);
    }, [nowSearchCondition]);
}