import { SearchKeywordContext } from "../../../Component/VideoDetail/VideoSearchKeywordComment/HomeSearchKeywordComment";

export function useHomeSearchKeywordCommentContent() {

    // 検索用キーワード
    const searchKeyword = SearchKeywordContext.useCtx();

    return {
        searchKeyword
    }
}