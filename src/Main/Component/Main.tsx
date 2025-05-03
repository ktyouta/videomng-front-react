import React from "react";
import styled from "styled-components";
import { Home } from "../../Home/Component/Home";
import { Content } from "../../Content/Component/Content";
import { Footer } from "../../Footer/Component/Footer";
import { Header } from "../../Header/Component/Header";
import { useMain } from "../Hook/useMain";
import { Route, Routes } from "react-router-dom";
import { UPDATE_USER_INFO_PATH } from "../../UpdateUserInfo/Const/UpdateUserInfoConst";
import { UpdateUserInfo } from "../../UpdateUserInfo/Component/UpdateUserInfo";

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
        <Routes>
            <Route
                path={UPDATE_USER_INFO_PATH}
                element={<UpdateUserInfo />}
            />
            <Route
                path={`/*`}
                element={
                    <AppDiv>
                        {/* ヘッダ */}
                        <Header />
                        {/* コンテンツ */}
                        <Content />
                        {/* フッター */}
                        <Footer />
                    </AppDiv>
                }
            />
        </Routes>

    );
}