import {
    InputKeywordContext,
    SelectedVideoCategoryContext,
    SelectedVideoTypeContext,
    SetInputKeywordContext,
    SetSelectedVideoCategoryContext,
    SetSelectedVideoTypeContext
} from "../../components/videolist/HomeVideoSearchConditionValueProvider";


export function useHomeVideoSearchConditionValue() {

    // 動画一覧検索条件選択値(カテゴリ)
    const selectedVideoCategory = SelectedVideoCategoryContext.useCtx();
    // 動画一覧検索条件選択値(カテゴリ) setter
    const setSelectedVideoCategory = SetSelectedVideoCategoryContext.useCtx();
    // 動画一覧検索条件選択値(キーワード)
    const inputKeyword = InputKeywordContext.useCtx();
    // 動画一覧検索条件選択値(キーワード) setter
    const setInputKeyword = SetInputKeywordContext.useCtx();
    // 動画一覧検索条件選択値(種別)
    const selectedVideoType = SelectedVideoTypeContext.useCtx();
    // 動画一覧検索条件選択値(種別) setter
    const setSelectedVideoType = SetSelectedVideoTypeContext.useCtx();

    /**
     * 入力値をリセット
     */
    function resetInput() {
        setSelectedVideoCategory(``);
        setInputKeyword(``);
        setSelectedVideoType(``);
    }

    return {
        selectedVideoCategory,
        setSelectedVideoCategory,
        inputKeyword,
        setInputKeyword,
        selectedVideoType,
        setSelectedVideoType,
        resetInput,
    };
}