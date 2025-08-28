import { useAtomValue } from "jotai";
import { SearchKeywordCommentKeywordContext } from "../../../Component/VideoDetail/VideoSearchKeywordComment/FavoriteSearchKeywordComment";

export function useFavoriteSearchKeywordCommentContent() {

    // 検索用キーワード
    const searchKeywordCommentKeyword = SearchKeywordCommentKeywordContext.useCtx();

    return {
        searchKeywordCommentKeyword
    }
}