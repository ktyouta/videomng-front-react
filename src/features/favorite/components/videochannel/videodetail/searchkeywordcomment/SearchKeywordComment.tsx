import React from "react";
import { createCtx } from "../../../../../../utils/createCtx";
import { useSearchKeywordComment } from "../../../../hooks/videochannel/videodetail/searchkeywordcomment/useSearchKeywordComment";
import { SearchKeywordCommentInput } from "./SearchKeywordCommentInput";
import { SearchKeywordCommentList } from "./SearchKeywordCommentList";


// 検索用キーワード
export const SearchKeywordContext = createCtx<string>();
// 検索用キーワード(setter)
export const SetSearchKeywordContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();


export function SearchKeywordComment() {

  console.log("SearchKeywordComment render");

  const {
    searchKeyword,
    setSearchKeyword } = useSearchKeywordComment();

  return (
    <SetSearchKeywordContext.Provider value={setSearchKeyword}>
      <SearchKeywordContext.Provider value={searchKeyword}>
        {/* コメントリスト */}
        <SearchKeywordCommentList />
      </SearchKeywordContext.Provider>
      {/* 入力欄 */}
      <SearchKeywordCommentInput />
    </SetSearchKeywordContext.Provider>
  );
}