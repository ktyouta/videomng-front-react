import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { videoCategoryAtom } from "../../Main/Atom/MainAtom";
import { selectedVideoCategoryAtom, selectedVideoTypeAtom } from "../Atom/HomeAtom";
import { useGlobalAtomValue } from "../../Common/Hook/useGlobalAtom";

export function useHomeSearchConditionMain() {

    // 動画カテゴリ
    const videoCategory = useGlobalAtomValue(videoCategoryAtom);
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