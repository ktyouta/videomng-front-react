import { NowSearchConditionContext, SetNowSearchConditionContext } from "../Component/HomeVideoNowSearchConditionValueProvider";


export function useHomeVideoNowSearchConditionValue() {

    // 動画一覧検索条件選択値(カテゴリ)
    const nowSearchCondition = NowSearchConditionContext.useCtx();
    // 動画一覧検索条件選択値(カテゴリ) setter
    const setNowSearchCondition = SetNowSearchConditionContext.useCtx();

    return {
        nowSearchCondition,
        setNowSearchCondition,
    };
}