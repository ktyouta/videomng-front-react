import React from "react";
import styled from "styled-components";
import { Home } from "../../Home/Component/Home";

//アプリケーション全体のスタイル
const AppDiv = styled.div`
  width: 100vw;
  height: 1300px;
  background-color:#333333;
`;


export function Main() {

    return (
        <AppDiv>
            <Home />
        </AppDiv>
    );
}