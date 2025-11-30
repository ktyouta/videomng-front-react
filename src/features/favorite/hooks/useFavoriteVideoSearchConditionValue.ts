import { SelectedFavoriteVideoCategoryContext, SelectedFavoriteVideoFavoriteLevelContext, SelectedFavoriteVideoPageContext, SelectedFavoriteVideoShowFolderContext, SelectedFavoriteVideoSortKeyContext, SelectedFavoriteVideoTagContext, SelectedFavoriteVideoViewStatusContext, SetSelectedFavoriteVideoCategoryContext, SetSelectedFavoriteVideoFavoriteLevelContext, SetSelectedFavoriteVideoPageContext, SetselectedFavoriteVideoShowFolderContext, SetSelectedFavoriteVideoSortKeyContext, SetselectedFavoriteVideoTagContext, SetselectedFavoriteVideoViewStatusContext } from "../components/FavoriteVideoSearchConditionValueProvider";

export const INIT_PAGE = `1`;

export function useFavoriteVideoSearchConditionValue() {

    // 動画一覧検索条件選択値(カテゴリ)
    const selectedFavoriteVideoCategory = SelectedFavoriteVideoCategoryContext.useCtx();
    // 動画一覧検索条件選択値(カテゴリ) setter
    const setSelectedFavoriteVideoCategory = SetSelectedFavoriteVideoCategoryContext.useCtx();
    // 動画一覧検索条件選択値(視聴状況)
    const selectedFavoriteVideoViewStatus = SelectedFavoriteVideoViewStatusContext.useCtx();
    // 動画一覧検索条件選択値(視聴状況) setter
    const setSelectedFavoriteVideoViewStatus = SetselectedFavoriteVideoViewStatusContext.useCtx();
    // 動画一覧検索条件選択値(タグ)
    const selectedFavoriteVideoTag = SelectedFavoriteVideoTagContext.useCtx();
    // 動画一覧検索条件選択値(タグ) setter
    const setSelectedFavoriteVideoTag = SetselectedFavoriteVideoTagContext.useCtx();
    // 動画一覧検索条件選択値(お気に入り度)
    const selectedFavoriteVideoFavoriteLevel = SelectedFavoriteVideoFavoriteLevelContext.useCtx();
    // 動画一覧検索条件選択値(お気に入り度) setter
    const setSelectedFavoriteVideoFavoriteLevel = SetSelectedFavoriteVideoFavoriteLevelContext.useCtx();
    // 動画一覧検索ソートキー
    const selectedFavoriteVideoSortKey = SelectedFavoriteVideoSortKeyContext.useCtx();
    // 動画一覧検索ソートキー setter
    const setSelectedFavoriteVideoSortKey = SetSelectedFavoriteVideoSortKeyContext.useCtx();
    // 動画一覧検索ページ
    const selectedFavoriteVideoPage = SelectedFavoriteVideoPageContext.useCtx();
    // 動画一覧検索ページ setter
    const setSelectedFavoriteVideoPage = SetSelectedFavoriteVideoPageContext.useCtx();
    // 動画一覧検索ページ
    const selectedFavoriteVideoShowFolder = SelectedFavoriteVideoShowFolderContext.useCtx();
    // 動画一覧検索ページ setter
    const setSlectedFavoriteVideoShowFolder = SetselectedFavoriteVideoShowFolderContext.useCtx();


    /**
     * 検索条件をリセット
     */
    function reset() {
        setSelectedFavoriteVideoCategory(``);
        setSelectedFavoriteVideoViewStatus(``);
        setSelectedFavoriteVideoTag(``);
        setSelectedFavoriteVideoFavoriteLevel(``);
        setSelectedFavoriteVideoSortKey(``);
        setSelectedFavoriteVideoPage(``);
        setSlectedFavoriteVideoShowFolder(``);
    }

    /**
     * ページ情報をリセット
     */
    function resetPage() {
        setSelectedFavoriteVideoPage(INIT_PAGE);
    }

    return {
        selectedFavoriteVideoCategory,
        setSelectedFavoriteVideoCategory,
        selectedFavoriteVideoViewStatus,
        setSelectedFavoriteVideoViewStatus,
        selectedFavoriteVideoTag,
        setSelectedFavoriteVideoTag,
        selectedFavoriteVideoFavoriteLevel,
        setSelectedFavoriteVideoFavoriteLevel,
        selectedFavoriteVideoSortKey,
        setSelectedFavoriteVideoSortKey,
        selectedFavoriteVideoPage,
        setSelectedFavoriteVideoPage,
        selectedFavoriteVideoShowFolder,
        setSlectedFavoriteVideoShowFolder,
        reset,
        resetPage,
    };
}