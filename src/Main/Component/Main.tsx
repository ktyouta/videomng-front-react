import React from "react";
import styled from "styled-components";
import { Home } from "../../Home/Component/Home";
import { Head } from "../../Head/Component/Head";
import { Content } from "../../Content/Component/Content";
import { Footer } from "../../Footer/Component/Footer";

//アプリケーション全体のスタイル
const AppDiv = styled.div`
  width: 100vw;
  min-height:100vh;
  background-color:#00050d;
  padding-top: 100px;
  box-sizing: border-box;
`;


export function Main() {

    console.log("Main render");

    return (
        <AppDiv>
            {/* ヘッダ */}
            <Head />
            {/* コンテンツ */}
            <Content />
            {/* フッター */}
            <Footer />
        </AppDiv>
    );
}