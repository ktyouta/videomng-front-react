import { ReactNode, useState } from "react";
import { createCtx } from "../../../../utils/createCtx";
import { FavoriteVideoListMergedType } from "../../types/FavoriteVideoListMergedType";
import { FolderType } from "../../types/videolist/FolderType";


// 画面表示用の動画リスト
export const DisplayVideoListContext = createCtx<FavoriteVideoListMergedType[]>();
// 画面表示用の動画リスト(setter)
export const SetDisplayVideoListContext = createCtx<React.Dispatch<React.SetStateAction<FavoriteVideoListMergedType[]>>>();
// 画面表示用のフォルダリスト
export const DisplayFolderListContext = createCtx<FolderType[]>();
// 画面表示用のフォルダリスト(setter)
export const SetDisplayFolderListContext = createCtx<React.Dispatch<React.SetStateAction<FolderType[]>>>();

// 引数の型
type propsType = {
    children: ReactNode
}

export function FavoriteVideoFolderDisplayVideoListProvider(props: propsType) {

    // 画面表示用の動画リスト
    const [displayVideoList, setDisplayVideoList] = useState<FavoriteVideoListMergedType[]>([]);
    // 画面表示用のフォルダリスト
    const [displayFolderList, setDisplayFolderList] = useState<FolderType[]>([]);

    return (
        <DisplayVideoListContext.Provider value={displayVideoList}>
            <SetDisplayVideoListContext.Provider value={setDisplayVideoList}>
                <DisplayFolderListContext.Provider value={displayFolderList}>
                    <SetDisplayFolderListContext.Provider value={setDisplayFolderList}>
                        {props.children}
                    </SetDisplayFolderListContext.Provider>
                </DisplayFolderListContext.Provider>
            </SetDisplayVideoListContext.Provider>
        </DisplayVideoListContext.Provider>
    );
}