import React from "react";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { HomeSearchKeywordCommentInput } from "./HomeSearchKeywordCommentInput";
import { HomeSearchKeywordCommentList } from "./HomeSearchKeywordCommentList";
import { useHomeSearchKeywordComment } from "../../../Hook/VideoDetail/VideoSearchKeywordComment/useHomeSearchKeywordComment";
import { createCtx } from "../../../../Common/Function/createCtx";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
  position:relative;
`;

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
    <Parent>
      <SetSearchKeywordContext.Provider value={setSearchKeyword}>
        <SearchKeywordContext.Provider value={searchKeyword}>
          {/* コメントリスト */}
          <HomeSearchKeywordCommentList />
        </SearchKeywordContext.Provider>
        {/* 入力欄 */}
        <HomeSearchKeywordCommentInput />
      </SetSearchKeywordContext.Provider>
    </Parent>
  );
}