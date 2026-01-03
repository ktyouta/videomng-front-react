import { SearchKeywordContext } from "../../../../components/videochannel/videodetail/searchkeywordcomment/SearchKeywordComment";

export function useSearchKeywordCommentContent() {

    // 検索用キーワード
    const searchKeyword = SearchKeywordContext.useCtx();

    return {
        searchKeyword
    }
}