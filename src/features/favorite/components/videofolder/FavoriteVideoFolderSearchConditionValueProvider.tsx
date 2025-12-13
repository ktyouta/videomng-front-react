import { ReactNode, useState } from "react";
import { useQueryParams } from "../../../../hooks/useQueryParams";
import { createCtx } from "../../../../utils/createCtx";
import { FOLDER_SEARCH_CONDITION } from "../../const/FavoriteConst";


// 動画一覧検索ページ
export const SelectedFavoriteVideoPageContext = createCtx<string>();
// 動画一覧検索ページ setter
export const SetSelectedFavoriteVideoPageContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索ソートキー
export const SelectedFavoriteVideoSortKeyContext = createCtx<string>();
// 動画一覧検索ソートキー setter
export const SetSelectedFavoriteVideoSortKeyContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索条件選択値(カテゴリ)
export const SelectedFavoriteVideoCategoryContext = createCtx<string>();
// 動画一覧検索条件選択値(カテゴリ) setter
export const SetSelectedFavoriteVideoCategoryContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索条件選択値(視聴状況)
export const SelectedFavoriteVideoViewStatusContext = createCtx<string>();
// 動画一覧検索条件選択値(視聴状況) setter
export const SetselectedFavoriteVideoViewStatusContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索条件選択値(タグ)
export const SelectedFavoriteVideoTagContext = createCtx<string>();
// 動画一覧検索条件選択値(タグ) setter
export const SetselectedFavoriteVideoTagContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索条件選択値(お気に入り度)
export const SelectedFavoriteVideoFavoriteLevelContext = createCtx<string>();
// 動画一覧検索条件選択値(お気に入り度) setter
export const SetSelectedFavoriteVideoFavoriteLevelContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();

// 引数の型
type propsType = {
    children: ReactNode
}

export function FavoriteVideoFolderSearchConditionValueProvider(props: propsType) {

    // クエリパラメータ
    const params = useQueryParams();

    // 動画一覧検索条件選択値(カテゴリ)
    const [selectedFavoriteVideoCategory, setSelectedFavoriteVideoCategory] = useState(params[FOLDER_SEARCH_CONDITION.QUERY_KEY_CATEGORY]);
    // 動画一覧検索条件選択値(視聴状況)
    const [selectedFavoriteVideoViewStatus, setSelectedFavoriteVideoViewStatus] = useState(params[FOLDER_SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS]);
    // 動画一覧検索条件選択値(タグ)
    const [selectedFavoriteVideoTag, setSelectedFavoriteVideoTag] = useState(params[FOLDER_SEARCH_CONDITION.QUERY_KEY_TAG]);
    // 動画一覧検索条件選択値(お気に入り度)
    const [selectedFavoriteVideoFavoriteLevel, setSelectedFavoriteVideoFavoriteLevel] = useState(params[FOLDER_SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL]);
    // 動画一覧検索ページ
    const [selectedFavoriteVideoPage, setSelectedFavoriteVideoPage] = useState(params[FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE]);
    // 動画一覧検索ソートキー
    const [selectedFavoriteVideoSortKey, setSelectedFavoriteVideoSortKey] = useState(params[FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT]);

    return (
        <SelectedFavoriteVideoCategoryContext.Provider value={selectedFavoriteVideoCategory}>
            <SetSelectedFavoriteVideoCategoryContext.Provider value={setSelectedFavoriteVideoCategory}>
                <SelectedFavoriteVideoViewStatusContext.Provider value={selectedFavoriteVideoViewStatus}>
                    <SetselectedFavoriteVideoViewStatusContext.Provider value={setSelectedFavoriteVideoViewStatus}>
                        <SelectedFavoriteVideoTagContext.Provider value={selectedFavoriteVideoTag}>
                            <SetselectedFavoriteVideoTagContext.Provider value={setSelectedFavoriteVideoTag}>
                                <SelectedFavoriteVideoFavoriteLevelContext.Provider value={selectedFavoriteVideoFavoriteLevel}>
                                    <SetSelectedFavoriteVideoFavoriteLevelContext.Provider value={setSelectedFavoriteVideoFavoriteLevel}>
                                        <SelectedFavoriteVideoSortKeyContext.Provider value={selectedFavoriteVideoSortKey}>
                                            <SetSelectedFavoriteVideoSortKeyContext.Provider value={setSelectedFavoriteVideoSortKey}>
                                                <SelectedFavoriteVideoPageContext.Provider value={selectedFavoriteVideoPage}>
                                                    <SetSelectedFavoriteVideoPageContext.Provider value={setSelectedFavoriteVideoPage}>
                                                        {props.children}
                                                    </SetSelectedFavoriteVideoPageContext.Provider>
                                                </SelectedFavoriteVideoPageContext.Provider>
                                            </SetSelectedFavoriteVideoSortKeyContext.Provider>
                                        </SelectedFavoriteVideoSortKeyContext.Provider>
                                    </SetSelectedFavoriteVideoFavoriteLevelContext.Provider>
                                </SelectedFavoriteVideoFavoriteLevelContext.Provider>
                            </SetselectedFavoriteVideoTagContext.Provider>
                        </SelectedFavoriteVideoTagContext.Provider>
                    </SetselectedFavoriteVideoViewStatusContext.Provider>
                </SelectedFavoriteVideoViewStatusContext.Provider>
            </SetSelectedFavoriteVideoCategoryContext.Provider>
        </SelectedFavoriteVideoCategoryContext.Provider>
    )
}