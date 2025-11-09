import React from "react";
import styled from "styled-components";
import { Home } from "../../home/components/Home";
import { Footer } from "../../footer/components/Footer";
import { Header } from "../../header/components/Header";
import { useMain } from "../hooks/useMain";
import { Content } from "../../content/components/Content";

//アプリケーション全体のスタイル
const AppDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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