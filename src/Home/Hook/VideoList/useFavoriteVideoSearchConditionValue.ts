import { SelectedVideoCategoryContext, SelectedVideoKeywordContext, SelectedVideoTypeContext, SetSelectedVideoCategoryContext, SetselectedVideoKeywordContext, SetSelectedVideoTypeContext } from "../../Component/HomeVideoSearchConditionValueProvider";


export function useHomeVideoSearchConditionValue() {

    // 動画一覧検索条件選択値(カテゴリ)
    const selectedVideoCategory = SelectedVideoCategoryContext.useCtx();
    // 動画一覧検索条件選択値(カテゴリ) setter
    const setSelectedVideoCategory = SetSelectedVideoCategoryContext.useCtx();
    // 動画一覧検索条件選択値(キーワード)
    const selectedVideoKeyword = SelectedVideoKeywordContext.useCtx();
    // 動画一覧検索条件選択値(キーワード) setter
    const setSelectedVideoKeyword = SetselectedVideoKeywordContext.useCtx();
    // 動画一覧検索条件選択値(種別)
    const selectedVideoType = SelectedVideoTypeContext.useCtx();
    // 動画一覧検索条件選択値(種別) setter
    const setSelectedVideoType = SetSelectedVideoTypeContext.useCtx();

    return {
        selectedVideoCategory,
        setSelectedVideoCategory,
        selectedVideoKeyword,
        setSelectedVideoKeyword,
        selectedVideoType,
        setSelectedVideoType,
    };
}