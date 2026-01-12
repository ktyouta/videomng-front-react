import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";
import { FavoriteVideoTagEditListContext, SetFavoriteVideoTagEditListContext } from "../../../components/videodetail/videotag/FavoriteVideoTagEditListProvider";



export function useFavoriteTagEditAssignedList() {

    // タグ編集リスト
    const favoriteVideoTagEditList = FavoriteVideoTagEditListContext.useCtx();
    // タグ編集リスト(setter)
    const setFavoriteVideoTagEditList = SetFavoriteVideoTagEditListContext.useCtx();
    // 画面サイズ判定
    const isMobile = useMediaQuery(mediaQuery.mobile);

    /**
     * タグ削除
     * @param tagIndex 
     */
    function deleteTag(tagIndex: number) {
        setFavoriteVideoTagEditList((e) => {
            return e.filter((_, index) => index !== tagIndex);
        });
    }

    return {
        deleteTag,
        favoriteVideoTagEditList,
        isMobile,
    }
}