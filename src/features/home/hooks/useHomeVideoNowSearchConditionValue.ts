import { NowSearchConditionContext, SetNowSearchConditionContext } from "../components/HomeVideoNowSearchConditionValueProvider";


export function useHomeVideoNowSearchConditionValue() {

    // 動画一覧検索条件選択値(カテゴリ)
    const nowSearchCondition = NowSearchConditionContext.useCtx();
    // 動画一覧検索条件選択値(カテゴリ) setter
    const setNowSearchCondition = SetNowSearchConditionContext.useCtx();

    /**
     * 現在の検索条件をリセット
     */
    function reset() {
        setNowSearchCondition((e) => {
            return {
                keyword: ``,
                category: ``,
                type: ``,
                nextPageToken: ``
            }
        });
    }

    return {
        nowSearchCondition,
        setNowSearchCondition,
        reset,
    };
}