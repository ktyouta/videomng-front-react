import { ReactNode, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ENV from "../../env.json";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import { createCtx } from "../../Common/Function/createCtx";
import { SEARCH_CONDITION } from "../Const/FavoriteConst";
import { useQueryParams } from "../../Common/Hook/useQueryParams";


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
// 動画一覧検索条件選択値(タグ)
export const SelectedFavoriteVideoFavoriteLevelContext = createCtx<string>();
// 動画一覧検索条件選択値(タグ) setter
export const SetSelectedFavoriteVideoFavoriteLevelContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索ソートキー
export const SelectedFavoriteVideoSortKeyContext = createCtx<string>();
// 動画一覧検索ソートキー setter
export const SetSelectedFavoriteVideoSortKeyContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索ページ
export const SelectedFavoriteVideoPageContext = createCtx<string>();
// 動画一覧検索ページ setter
export const SetSelectedFavoriteVideoPageContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();

// 引数の型
type propsType = {
    children: ReactNode
}

export function FavoriteVideoSearchConditionValueProvider(props: propsType) {

    // クエリパラメータ
    const params = useQueryParams();

    // 動画一覧検索条件選択値(カテゴリ)
    const [selectedFavoriteVideoCategory, setSelectedFavoriteVideoCategory] = useState(params[SEARCH_CONDITION.QUERY_KEY_CATEGORY]);
    // 動画一覧検索条件選択値(視聴状況)
    const [selectedFavoriteVideoViewStatus, setSelectedFavoriteVideoViewStatus] = useState(params[SEARCH_CONDITION.QUERY_KEY_VIEW_STATUS]);
    // 動画一覧検索条件選択値(タグ)
    const [selectedFavoriteVideoTag, setSelectedFavoriteVideoTag] = useState(params[SEARCH_CONDITION.QUERY_KEY_TAG]);
    // 動画一覧検索条件選択値(お気に入り度)
    const [selectedFavoriteVideoFavoriteLevel, setSelectedFavoriteVideoFavoriteLevel] = useState(params[SEARCH_CONDITION.QUERY_KEY_FAVORITE_LEVEL]);
    // 動画一覧検索ソートキー
    const [selectedFavoriteVideoSortKey, setSelectedFavoriteVideoSortKey] = useState(params[SEARCH_CONDITION.QUERY_KEY_SORT]);
    // 動画一覧検索ページ
    const [selectedFavoriteVideoPage, setSelectedFavoriteVideoPage] = useState(params[SEARCH_CONDITION.QUERY_KEY_PAGE]);


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