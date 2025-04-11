import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { videoCategoryAtom } from "../../Main/Atom/MainAtom";
import { selectedFavoriteVideoCategoryAtom, selectedFavoriteVideoviewStatusAtom, viewStatusListAtom } from "../Atom/FavoriteAtom";

export function useFavoriteSearchConditionMain() {

    // 動画カテゴリ
    const videoCategory = useAtomValue(videoCategoryAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const [selectedFavoriteVideoCategory, setSelectedFavoriteVideoCategory] = useAtom(selectedFavoriteVideoCategoryAtom);
    // 視聴状況
    const [selectedFavoriteVideoviewStatus, setSelectedFavoriteVideoviewStatus] = useAtom(selectedFavoriteVideoviewStatusAtom);
    // 視聴状況リスト
    const viewStatusList = useAtomValue(viewStatusListAtom);


    return {
        videoCategory,
        selectedFavoriteVideoCategory,
        setSelectedFavoriteVideoCategory,
        viewStatusList,
        selectedFavoriteVideoviewStatus,
        setSelectedFavoriteVideoviewStatus,
    };
}