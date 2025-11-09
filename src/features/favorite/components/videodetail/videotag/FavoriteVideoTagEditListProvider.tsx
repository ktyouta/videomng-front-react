import { ReactNode } from "react";
import { createCtx } from "../../../../../utils/createCtx";
import { useFavoriteVideoTagEditListProvider } from "../../../hooks/videodetail/videotag/useFavoriteVideoTagEditListProvider";
import { tagType } from "../../../../../components/TagsComponent";

// タグ編集リスト
export const FavoriteVideoTagEditListContext = createCtx<tagType[]>();
// タグ編集リスト(setter)
export const SetFavoriteVideoTagEditListContext = createCtx<React.Dispatch<React.SetStateAction<tagType[]>>>();

type propsType = {
    children: ReactNode
}

export function FavoriteVideoTagEditListProvider(props: propsType) {

    const {
        favoriteVideoTagEditList,
        setFavoriteVideoTagEditList, } = useFavoriteVideoTagEditListProvider();

    return (
        <FavoriteVideoTagEditListContext.Provider value={favoriteVideoTagEditList}>
            <SetFavoriteVideoTagEditListContext.Provider value={setFavoriteVideoTagEditList}>
                {props.children}
            </SetFavoriteVideoTagEditListContext.Provider>
        </FavoriteVideoTagEditListContext.Provider>
    );
}