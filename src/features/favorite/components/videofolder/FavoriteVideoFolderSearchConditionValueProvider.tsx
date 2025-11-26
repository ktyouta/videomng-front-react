import { ReactNode, useMemo, useState } from "react";
import { createCtx } from "../../../../utils/createCtx";
import { useQueryParams } from "../../../../hooks/useQueryParams";
import { SEARCH_CONDITION } from "../../const/FavoriteConst";


// 動画一覧検索ページ
export const SelectedFavoriteVideoPageContext = createCtx<string>();
// 動画一覧検索ページ setter
export const SetSelectedFavoriteVideoPageContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();

// 引数の型
type propsType = {
    children: ReactNode
}

export function FavoriteVideoFolderSearchConditionValueProvider(props: propsType) {

    // クエリパラメータ
    const params = useQueryParams();

    // 動画一覧検索ページ
    const [selectedFavoriteVideoPage, setSelectedFavoriteVideoPage] = useState(params[SEARCH_CONDITION.QUERY_KEY_PAGE]);


    return (
        <SelectedFavoriteVideoPageContext.Provider value={selectedFavoriteVideoPage}>
            <SetSelectedFavoriteVideoPageContext.Provider value={setSelectedFavoriteVideoPage}>
                {props.children}
            </SetSelectedFavoriteVideoPageContext.Provider>
        </SelectedFavoriteVideoPageContext.Provider>
    )
}