import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { selectedVideoCategoryAtom, selectedVideoTypeAtom } from "../../Atom/HomeAtom";
import { useGlobalAtomValue } from "../../../Common/Hook/useGlobalAtom";
import { useVideoCategory } from "../../../Main/Hook/useVideoCategory";
import { useHomeVideoSearchConditionValue } from "./useHomeVideoSearchConditionValue";

export function useHomeSearchConditionMain() {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 入力中の検索条件
    const {
        selectedVideoCategory,
        setSelectedVideoCategory,
        selectedVideoType,
        setSelectedVideoType, } = useHomeVideoSearchConditionValue();

    return {
        videoCategory,
        selectedVideoType,
        setSelectedVideoType,
        selectedVideoCategory,
        setSelectedVideoCategory,
    };
}