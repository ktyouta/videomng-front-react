import { useHomeVideoNowSearchConditionValue } from "../../useHomeVideoNowSearchConditionValue";


export function useHomeVideoArea() {

    // 現在の動画検索条件
    const { nowSearchCondition } = useHomeVideoNowSearchConditionValue();

    return {
        nowSearchCondition
    }
}