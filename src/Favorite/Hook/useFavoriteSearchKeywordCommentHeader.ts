import { useSetAtom } from "jotai";
import { searchKeywordCommentAtom, searchKeywordCommentUrlAtom } from "../Atom/FavoriteAtom";

export function useFavoriteSearchKeywordCommentHeader() {

    // コメント情報
    const setSearchKeywordComment = useSetAtom(searchKeywordCommentAtom);
    // 動画取得用URL
    const setSearchKeywordCommentUrl = useSetAtom(searchKeywordCommentUrlAtom);

    /**
     * コメント情報リセット
     */
    function resetSearchKeywordCommentInfo() {
        setSearchKeywordCommentUrl(``);
        setSearchKeywordComment(undefined);
    }

    return {
        resetSearchKeywordCommentInfo
    }
}