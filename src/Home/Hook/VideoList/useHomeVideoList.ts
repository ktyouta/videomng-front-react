import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";
import { useSyncHomeVideoListUrl } from "./useSyncHomeVideoListUrl";

export function useHomeVideoList() {

    // 現在の動画検索条件
    const { nowSearchCondition } = useHomeVideoNowSearchConditionValue();

    // 検索条件に応じてURLを変更
    useSyncHomeVideoListUrl();

    return {
        nowSearchCondition
    }
}