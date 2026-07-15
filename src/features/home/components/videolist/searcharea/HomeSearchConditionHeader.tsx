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
  font-size:14px;
`;


export function HomeSearchConditionHeader() {

    console.log("HomeSearchConditionHeader render");

    return (
        <HeaderDiv>
            <TitleSpan>
                条件を指定
            </TitleSpan>
        </HeaderDiv>
    );
}