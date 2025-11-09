import { ReactNode, useMemo, useState } from "react";
import { createCtx } from "../../../../utils/createCtx";
import { FavoriteVideoListMergedType } from "../../types/videolist/FavoriteVideoListMergedType";


// 画面表示用の動画リスト
export const DisplayVideoListContext = createCtx<FavoriteVideoListMergedType[]>();
// 画面表示用の動画リスト(setter)
export const SetDisplayVideoListContext = createCtx<React.Dispatch<React.SetStateAction<FavoriteVideoListMergedType[]>>>();

// 引数の型
type propsType = {
    children: ReactNode
}

export function FavoriteVideoDisplayVideoListProvider(props: propsType) {

    // 画面表示用の動画リスト
    const [displayVideoList, setDisplayVideoList] = useState<FavoriteVideoListMergedType[]>([]);

    return (
        <DisplayVideoListContext.Provider value={displayVideoList}>
            <SetDisplayVideoListContext.Provider value={setDisplayVideoList}>
                {props.children}
            </SetDisplayVideoListContext.Provider>
        </DisplayVideoListContext.Provider>
    );
}