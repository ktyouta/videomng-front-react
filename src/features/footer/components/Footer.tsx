import React from "react";
import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
  height:120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-bottom: 1%;
`;

const TermOfUseMessageAreaDiv = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  box-sizing: border-box;
  padding-left: 1%;
`;


export function Footer() {

  console.log("Footer render");

  return (
    <Parent>
      <TermOfUseMessageAreaDiv>
        このアプリは YouTube Data API を利用しており、表示されるコンテンツは YouTube の提供するデータに基づいています。<br />
        本アプリは YouTube 公式サービスではありません。
      </TermOfUseMessageAreaDiv>
    </Parent>
  );
}