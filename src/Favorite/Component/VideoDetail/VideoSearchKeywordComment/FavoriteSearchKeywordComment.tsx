import styled from "styled-components";
import { FavoriteSearchKeywordCommentList } from "./FavoriteSearchKeywordCommentList";
import { FavoriteSearchKeywordCommentInput } from "./FavoriteSearchKeywordCommentInput";
import { useFavoriteSearchKeywordComment } from "../../../Hook/VideoDetail/VideoSearchKeywordComment/useFavoriteSearchKeywordComment";
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
export const SearchKeywordCommentKeywordContext = createCtx<string>();
// 検索用キーワード(setter)
export const SetSearchKeywordCommentKeywordContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();


export function FavoriteSearchKeywordComment() {

  console.log("FavoriteSearchKeywordComment render");

  const {
    searchKeywordCommentKeyword,
    setSearchKeywordCommentKeyword, } = useFavoriteSearchKeywordComment();

  return (
    <Parent>
      <SearchKeywordCommentKeywordContext.Provider value={searchKeywordCommentKeyword}>
        {/* コメントリスト */}
        <FavoriteSearchKeywordCommentList />
        <SetSearchKeywordCommentKeywordContext.Provider value={setSearchKeywordCommentKeyword}>
          {/* 入力欄 */}
          <FavoriteSearchKeywordCommentInput />
        </SetSearchKeywordCommentKeywordContext.Provider>
      </SearchKeywordCommentKeywordContext.Provider>
    </Parent>
  );
}