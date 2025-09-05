import { useSetAtom } from "jotai";
import { keywordAtom, selectedVideoCategoryAtom, selectedVideoTypeAtom, showMoreDataAtom, videoListDataAtom } from "../../Atom/HomeAtom";
import { useHomeVideoSearchConditionValue } from "./useFavoriteVideoSearchConditionValue";

export function useHomeResetCondition() {

    // 動画リスト
    const setVideoListData = useSetAtom(videoListDataAtom);
    // 検索キーワード
    //const setKeyword = useSetAtom(keywordAtom);
    // 動画一覧検索条件選択値(種別)
    const setSelectedVideoType = useSetAtom(selectedVideoTypeAtom);
    // 動画一覧検索条件選択値(カテゴリ)
    const setSelectedVideoCategory = useSetAtom(selectedVideoCategoryAtom);
    // 動画リスト追加読み込み用
    const setShowMoreData = useSetAtom(showMoreDataAtom);
    // 動画検索条件
    const { setSelectedVideoKeyword } = useHomeVideoSearchConditionValue();

    /**
     * ホーム画面を初期化
     */
    function reset() {
        setVideoListData(undefined);
        setSelectedVideoKeyword(``);
        setSelectedVideoType(``);
        setSelectedVideoCategory(``);
        setShowMoreData(undefined);
    }

    return {
        reset
    }
}