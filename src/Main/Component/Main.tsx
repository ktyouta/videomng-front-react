import React from "react";
import styled from "styled-components";
import { Home } from "../../Home/Component/Home";
import { Content } from "../../Content/Component/Content";
import { Footer } from "../../Footer/Component/Footer";
import { Header } from "../../Header/Component/Header";
import { useMain } from "../Hook/useMain";
import { Route, Routes } from "react-router-dom";
import { UpdateUserInfo } from "../../UpdateUserInfo/Component/UpdateUserInfo";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { UpdateUserPassword } from "../../UpdateUserPassword/Component/UpdateUserPassword";
import { createCtx } from "../../Common/Function/createCtx";

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