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
  margin-bottom:6%;
`;

const TitleSpan = styled.div`
`;


export function HeaderHowToUseHeader() {

    console.log("HeaderHowToUseHeader render");

    return (
        <HeaderDiv>
            <TitleSpan>
                使い方
            </TitleSpan>
        </HeaderDiv>
    );
}