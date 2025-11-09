import { ReactNode, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCtx } from "../../../../utils/createCtx";
import { SEARCH_CONDITION, VIDEO_TYPE_LIST } from "../../const/HomeConst";


// 動画一覧検索条件選択値(カテゴリ)
export const SelectedVideoCategoryContext = createCtx<string>();
// 動画一覧検索条件選択値(カテゴリ) setter
export const SetSelectedVideoCategoryContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索条件(キーワード)
export const InputKeywordContext = createCtx<string>();
// 動画一覧検索条件(キーワード) setter
export const SetInputKeywordContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索条件選択値(種別)
export const SelectedVideoTypeContext = createCtx<string>();
// 動画一覧検索条件選択値(種別) setter
export const SetSelectedVideoTypeContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();

// 引数の型
type propsType = {
    children: ReactNode
}

export function HomeVideoSearchConditionValueProvider(props: propsType) {

    const searchParams = new URLSearchParams(window.location.search);

    // 動画一覧検索条件選択値(カテゴリ)
    const [selectedVideoCategory, setSelectedVideoCategory] = useState(searchParams.get(SEARCH_CONDITION.QUERY_KEY_CATEGORY) ?? ``);
    // 動画一覧検索条件選択値(キーワード)
    const [inputKeyword, setInputKeyword] = useState(searchParams.get(SEARCH_CONDITION.QUERY_KEY_KEYWORD) ?? ``);
    // 動画一覧検索条件選択値(種別)
    const [selectedVideoType, setSelectedVideoType] = useState(searchParams.get(SEARCH_CONDITION.QUERY_KEY_TYPE) ?? VIDEO_TYPE_LIST[0].value);


    return (
        <SelectedVideoCategoryContext.Provider value={selectedVideoCategory}>
            <SetSelectedVideoCategoryContext.Provider value={setSelectedVideoCategory}>
                <InputKeywordContext.Provider value={inputKeyword}>
                    <SetInputKeywordContext.Provider value={setInputKeyword}>
                        <SelectedVideoTypeContext.Provider value={selectedVideoType}>
                            <SetSelectedVideoTypeContext.Provider value={setSelectedVideoType}>
                                {props.children}
                            </SetSelectedVideoTypeContext.Provider>
                        </SelectedVideoTypeContext.Provider>
                    </SetInputKeywordContext.Provider>
                </InputKeywordContext.Provider>
            </SetSelectedVideoCategoryContext.Provider>
        </SelectedVideoCategoryContext.Provider>
    );
}