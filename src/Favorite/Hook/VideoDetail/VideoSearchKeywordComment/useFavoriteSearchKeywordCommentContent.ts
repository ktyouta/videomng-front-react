import { useAtomValue } from "jotai";
import { searchKeywordCommentKeywordAtom } from "../../../Atom/FavoriteAtom";

export function useFavoriteSearchKeywordCommentContent() {

    // キーワード
    const searchKeywordCommentKeyword = useAtomValue(searchKeywordCommentKeywordAtom);

    return {
        searchKeywordCommentKeyword
    }
}