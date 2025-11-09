import styled from "styled-components";
import { FavoriteFavoriteCommentModalIcon } from "./videofavoritecomment/FavoriteFavoriteCommentModalIcon";
import { FavoriteBlockCommentModalIcon } from "./videoblockcomment/FavoriteBlockCommentModalIcon";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height: 22px;
  padding-right: 20px;
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