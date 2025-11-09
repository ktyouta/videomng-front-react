import { useAtomValue } from "jotai";
import { SearchKeywordCommentKeywordContext } from "../../../components/videodetail/videosearchkeywordcomment/FavoriteSearchKeywordComment";

export function useFavoriteSearchKeywordCommentContent() {

    // 検索用キーワード
    const searchKeywordCommentKeyword = SearchKeywordCommentKeywordContext.useCtx();

    return {
        searchKeywordCommentKeyword
    }
}