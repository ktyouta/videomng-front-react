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


export function HeaderUsagePrecautionHeader() {

    console.log("HeaderUsagePrecautionHeader render");

    return (
        <HeaderDiv>
            <TitleSpan>
                使用上の注意
            </TitleSpan>
        </HeaderDiv>
    );
}