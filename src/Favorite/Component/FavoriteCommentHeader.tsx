import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "./FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "./FavoriteBlockCommentModalIcon";
import { FlexSpaceDiv } from "../../Common/StyledComponent/FlexSpaceDiv";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
  padding-right: 2%;
`;

const BlockIconDiv = styled.div`
  width: 10%;
  box-sizing: border-box;
  position:relative;
  display: flex;
  grid-column-gap: 10px;
`;

export function FavoriteCommentHeader() {

  console.log("FavoriteCommentHeader render");

  return (
    <HeaderDiv>
      <FlexSpaceDiv />
      <BlockIconDiv>
        {/* お気に入りコメントリスト */}
        <FavoriteFavoriteCommentModalIcon />
        {/* 非表示コメントリスト */}
        <FavoriteBlockCommentModalIcon />
      </BlockIconDiv>
    </HeaderDiv>
  );
}