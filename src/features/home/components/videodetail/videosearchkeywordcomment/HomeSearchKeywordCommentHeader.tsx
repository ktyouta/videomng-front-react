import styled from "styled-components";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  position:relative;
`;

const HeaderTitleSpan = styled.span`
  font-size:19px;
`;


export function HomeSearchKeywordCommentHeader() {

  console.log("HomeSearchKeywordCommentHeader render");

  return (
    <HeaderDiv>
      <HeaderTitleSpan>
        キーワード検索(コメント)
      </HeaderTitleSpan>
    </HeaderDiv>
  );
}