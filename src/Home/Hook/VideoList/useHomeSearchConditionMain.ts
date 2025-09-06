import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { selectedVideoCategoryAtom, selectedVideoTypeAtom } from "../../Atom/HomeAtom";
import { useGlobalAtomValue } from "../../../Common/Hook/useGlobalAtom";
import { useVideoCategory } from "../../../Main/Hook/useVideoCategory";

export function useHomeSearchConditionMain() {

    // 動画カテゴリ
    const { data: videoCategory } = useVideoCategory();
    // 動画一覧検索条件選択値(種別)
    const [selectedVideoType, setSelectedVideoType] = useAtom(selectedVideoTypeAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const [selectedVideoCategory, setSelectedVideoCategory] = useAtom(selectedVideoCategoryAtom);

    return {
        videoCategory,
        selectedVideoType,
        setSelectedVideoType,
        selectedVideoCategory,
        setSelectedVideoCategory,
    };
}