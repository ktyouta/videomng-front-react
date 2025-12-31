import { useMemo } from "react";
import { useVideoCategory } from "../../../../main/hooks/useVideoCategory";
import { useHomeVideoSearchConditionValue } from "../useHomeVideoSearchConditionValue";

export function useHomeSearchConditionMain() {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 入力中の検索条件
    const {
        selectedVideoCategory,
        setSelectedVideoCategory,
        selectedVideoType,
        setSelectedVideoType, } = useHomeVideoSearchConditionValue();

    const selectVideoCategory = useMemo(() => {

        if (!videoCategory) {
            return;
        }

        return [
            {
                label: `すべて`,
                value: ``,
            }, ...videoCategory
        ];

    }, [videoCategory]);

    return {
        selectVideoCategory,
        selectedVideoType,
        setSelectedVideoType,
        selectedVideoCategory,
        setSelectedVideoCategory,
    };
}