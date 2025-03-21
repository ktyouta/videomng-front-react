import React from "react";
import styled from "styled-components";
import { Home } from "../../Home/Component/Home";
import { Content } from "../../Content/Component/Content";
import { Footer } from "../../Footer/Component/Footer";
import { Header } from "../../Header/Component/Header";
import { useMain } from "../Hook/useMain";

//アプリケーション全体のスタイル
const AppDiv = styled.div`
  width: 99vw;
  min-height:100vh;
  padding-top: 100px;
  box-sizing: border-box;
`;


export function Main() {

    console.log("Main render");

    useMain();

    return (
        <AppDiv>
            {/* ヘッダ */}
            <Header />
            {/* コンテンツ */}
            <Content />
            {/* フッター */}
            <Footer />
        </AppDiv>
    );
}