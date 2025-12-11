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

// 引数の型
type propsType = {
    children: ReactNode
}

export function FavoriteVideoFolderSearchConditionValueProvider(props: propsType) {

    // クエリパラメータ
    const params = useQueryParams();

    // 動画一覧検索ページ
    const [selectedFavoriteVideoPage, setSelectedFavoriteVideoPage] = useState(params[FOLDER_SEARCH_CONDITION.QUERY_KEY_PAGE]);
    // 動画一覧検索ソートキー
    const [selectedFavoriteVideoSortKey, setSelectedFavoriteVideoSortKey] = useState(params[FOLDER_SEARCH_CONDITION.QUERY_KEY_SORT]);

    return (
        <SelectedFavoriteVideoPageContext.Provider value={selectedFavoriteVideoPage}>
            <SetSelectedFavoriteVideoPageContext.Provider value={setSelectedFavoriteVideoPage}>
                <SelectedFavoriteVideoSortKeyContext.Provider value={selectedFavoriteVideoSortKey}>
                    <SetSelectedFavoriteVideoSortKeyContext.Provider value={setSelectedFavoriteVideoSortKey}>
                        {props.children}
                    </SetSelectedFavoriteVideoSortKeyContext.Provider>
                </SelectedFavoriteVideoSortKeyContext.Provider>
            </SetSelectedFavoriteVideoPageContext.Provider>
        </SelectedFavoriteVideoPageContext.Provider>
    )
}