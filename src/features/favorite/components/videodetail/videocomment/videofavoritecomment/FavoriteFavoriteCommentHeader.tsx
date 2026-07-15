import styled from "styled-components";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
`;

const TitleSpan = styled.div`
`;


export function FavoriteFavoriteCommentHeader() {

  console.log("FavoriteFavoriteCommentHeader render");

  return (
    <HeaderDiv>
      <TitleSpan>
        お気に入りコメント
      </TitleSpan>
    </HeaderDiv>
  );
}