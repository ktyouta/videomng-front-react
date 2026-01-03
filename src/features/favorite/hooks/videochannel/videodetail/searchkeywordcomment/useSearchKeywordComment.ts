import { useState } from "react";

export function useSearchKeywordComment() {

    // 検索用キーワード
    const [searchKeyword, setSearchKeyword] = useState(``);

    return {
        searchKeyword,
        setSearchKeyword
    }
}