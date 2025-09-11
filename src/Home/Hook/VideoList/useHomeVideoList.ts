import { useHomeVideoNowSearchConditionValue } from "../useHomeVideoNowSearchConditionValue";
import { useSyncHomeVideoListUrl } from "./useSyncHomeVideoListUrl";

export function useHomeVideoList() {

    // 検索条件に応じてURLを変更
    useSyncHomeVideoListUrl();
}