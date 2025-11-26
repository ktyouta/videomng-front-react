import { SelectedFavoriteVideoPageContext, SetSelectedFavoriteVideoPageContext } from "../../components/videofolder/FavoriteVideoFolderSearchConditionValueProvider";

export const INIT_PAGE = `1`;

export function useFavoriteVideoFolderSearchConditionValue() {

    // 動画一覧検索ページ
    const selectedFavoriteVideoPage = SelectedFavoriteVideoPageContext.useCtx();
    // 動画一覧検索ページ setter
    const setSelectedFavoriteVideoPage = SetSelectedFavoriteVideoPageContext.useCtx();


    /**
     * 検索条件をリセット
     */
    function reset() {
        setSelectedFavoriteVideoPage(``);
    }

    /**
     * ページ情報をリセット
     */
    function resetPage() {
        setSelectedFavoriteVideoPage(INIT_PAGE);
    }

    return {
        selectedFavoriteVideoPage,
        setSelectedFavoriteVideoPage,
        reset,
        resetPage,
    };
}