import { VIDEO_MNG_PATH } from "../../../Common/Const/CommonConst";
import ENV from "../../../env.json";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";
import { useCreateHomeVideoListQuery } from "./useCreateHomeVideoListQuery";


export function useSyncHomeVideoListUrl() {

    const { nowSearchCondition } = useHomeVideoNowSearchConditionValue();

    const { query } = useCreateHomeVideoListQuery();

    //ルーティング用
    const navigate = useNavigate();

    // 検索条件の変更時にURLを切り替える
    useEffect(() => {
        navigate(query);
    }, [nowSearchCondition]);
}