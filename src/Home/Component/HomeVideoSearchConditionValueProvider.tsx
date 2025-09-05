import { ReactNode, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ENV from "../../env.json";
import { VIDEO_MNG_PATH } from "../../Common/Const/CommonConst";
import { createCtx } from "../../Common/Function/createCtx";
import { SEARCH_CONDITION } from "../Const/HomeConst";


// 動画一覧検索条件選択値(カテゴリ)
export const SelectedVideoCategoryContext = createCtx<string>();
// 動画一覧検索条件選択値(カテゴリ) setter
export const SetSelectedVideoCategoryContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画一覧検索条件選択値(キーワード)
export const SelectedVideoKeywordContext = createCtx<string>();
// 動画一覧検索条件選択値(キーワード) setter
export const SetselectedVideoKeywordContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
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
    const [selectedVideoKeyword, setSelectedVideoKeyword] = useState(searchParams.get(SEARCH_CONDITION.QUERY_KEY_KEYWORD) ?? ``);
    // 動画一覧検索条件選択値(種別)
    const [selectedVideoType, setSelectedVideoType] = useState(searchParams.get(SEARCH_CONDITION.QUERY_KEY_TYPE) ?? ``);


    return <SelectedVideoCategoryContext.Provider value={selectedVideoCategory}>
        <SetSelectedVideoCategoryContext.Provider value={setSelectedVideoCategory}>
            <SelectedVideoKeywordContext.Provider value={selectedVideoKeyword}>
                <SetselectedVideoKeywordContext.Provider value={setSelectedVideoKeyword}>
                    <SelectedVideoTypeContext.Provider value={selectedVideoType}>
                        <SetSelectedVideoTypeContext.Provider value={setSelectedVideoType}>
                            {props.children}
                        </SetSelectedVideoTypeContext.Provider>
                    </SelectedVideoTypeContext.Provider>
                </SetselectedVideoKeywordContext.Provider>
            </SelectedVideoKeywordContext.Provider>
        </SetSelectedVideoCategoryContext.Provider>
    </SelectedVideoCategoryContext.Provider>
}