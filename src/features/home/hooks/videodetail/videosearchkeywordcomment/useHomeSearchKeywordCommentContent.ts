import { SearchKeywordContext } from "../../../components/videodetail/videosearchkeywordcomment/HomeSearchKeywordComment";

export function useHomeSearchKeywordCommentContent() {

    // 検索用キーワード
    const searchKeyword = SearchKeywordContext.useCtx();

    return {
        searchKeyword
    }
}