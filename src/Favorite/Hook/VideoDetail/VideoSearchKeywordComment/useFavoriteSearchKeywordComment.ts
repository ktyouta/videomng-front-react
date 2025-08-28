import { useState } from "react";

export function useFavoriteSearchKeywordComment() {

    // 検索用キーワード
    const [searchKeywordCommentKeyword, setSearchKeywordCommentKeyword] = useState(``);

    return {
        searchKeywordCommentKeyword,
        setSearchKeywordCommentKeyword,
    };
}