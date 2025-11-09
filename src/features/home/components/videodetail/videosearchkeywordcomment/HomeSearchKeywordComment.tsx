import React from "react";
import { IconComponent } from "../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { HomeSearchKeywordCommentInput } from "./HomeSearchKeywordCommentInput";
import { HomeSearchKeywordCommentList } from "./HomeSearchKeywordCommentList";
import { createCtx } from "../../../../../utils/createCtx";
import { useHomeSearchKeywordComment } from "../../../hooks/videodetail/videosearchkeywordcomment/useHomeSearchKeywordComment";


// 検索用キーワード
export const SearchKeywordContext = createCtx<string>();
// 検索用キーワード(setter)
export const SetSearchKeywordContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();


export function HomeSearchKeywordComment() {

  console.log("HomeSearchKeywordComment render");

  const {
    searchKeyword,
    setSearchKeyword } = useHomeSearchKeywordComment();

  return (
    <SetSearchKeywordContext.Provider value={setSearchKeyword}>
      <SearchKeywordContext.Provider value={searchKeyword}>
        {/* コメントリスト */}
        <HomeSearchKeywordCommentList />
      </SearchKeywordContext.Provider>
      {/* 入力欄 */}
      <HomeSearchKeywordCommentInput />
    </SetSearchKeywordContext.Provider>
  );
}