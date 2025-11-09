import styled from "styled-components";
import { FavoriteSearchFilterModal } from "./filter/FavoriteSearchFilterModal";
import { FavoriteSearchSortArea } from "./FavoriteSearchSortArea";
import { FavoriteSearchSelectedTag } from "./FavoriteSearchSelectedTag";
import { FavoriteSearchText } from "./FavoriteSearchText";
import { FavoriteSearchCsvArea } from "./csv/FavoriteSearchCsvArea";

const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 6%;
`;

const SearchParentDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 4%;
  margin-top: 10px;
`;


/**
 * 検索条件エリア
 */
export function FavoriteSearchAreaMobile() {

  console.log("FavoriteSearchAreaMobile render");

  return (
    <Parent>
      {/* タイトルフィルター */}
      <FavoriteSearchText
        width="70%"
      />
      <SearchParentDiv>
        {/* 並び替えリスト */}
        <FavoriteSearchSortArea />
        {/* フィルター用モーダル */}
        <FavoriteSearchFilterModal />
        {/* CSV保存取込 */}
        <FavoriteSearchCsvArea />
      </SearchParentDiv>
      {/* 選択中のタグ */}
      <FavoriteSearchSelectedTag />
    </Parent>
  );
}