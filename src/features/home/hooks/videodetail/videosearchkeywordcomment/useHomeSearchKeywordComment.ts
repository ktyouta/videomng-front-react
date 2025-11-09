import { useState } from "react";

export function useHomeSearchKeywordComment() {

    // 検索用キーワード
    const [searchKeyword, setSearchKeyword] = useState(``);

    return {
        searchKeyword,
        setSearchKeyword
    }
}