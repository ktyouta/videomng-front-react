import { ReactNode, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCtx } from "../../Common/Function/createCtx";
import { SEARCH_CONDITION } from "../Const/HomeConst";
import { useQueryParams } from "../../Common/Hook/useQueryParams";


// 現在の検索条件
export const NowSearchConditionContext = createCtx<nowSearchConditionType>();
// 現在の検索条件 setter
export const SetNowSearchConditionContext = createCtx<React.Dispatch<React.SetStateAction<nowSearchConditionType>>>();


// 引数の型
type propsType = {
    children: ReactNode
}

// 現在の検索条件の型
export type nowSearchConditionType = {
    category: string,
    keyword: string,
    type: string,
    nextPageToken: string,
}

export function HomeVideoNowSearchConditionValueProvider(props: propsType) {

    // クエリパラメータ
    const params = useQueryParams();

    // 現在の検索条件
    const [nowSearchCondition, setNowSearchCondition] = useState<nowSearchConditionType>({
        category: params[SEARCH_CONDITION.QUERY_KEY_CATEGORY],
        keyword: params[SEARCH_CONDITION.QUERY_KEY_KEYWORD],
        type: params[SEARCH_CONDITION.QUERY_KEY_TYPE],
        nextPageToken: ``,
    });

    return (
        <NowSearchConditionContext.Provider value={nowSearchCondition}>
            <SetNowSearchConditionContext.Provider value={setNowSearchCondition}>
                {props.children}
            </SetNowSearchConditionContext.Provider>
        </NowSearchConditionContext.Provider>
    );
}