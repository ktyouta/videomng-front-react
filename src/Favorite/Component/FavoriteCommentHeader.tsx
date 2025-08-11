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
  padding-right: 5%;
`;

export function FavoriteCommentHeader() {

  console.log("FavoriteCommentHeader render");

  return (
    <HeaderDiv>
      <FlexSpaceDiv />
      {/* お気に入りコメントリスト */}
      <FavoriteFavoriteCommentModalIcon />
      {/* 非表示コメントリスト */}
      <FavoriteBlockCommentModalIcon />
    </HeaderDiv>
  );
}