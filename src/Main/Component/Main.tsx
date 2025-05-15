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
  width: 99vw;
  min-height:100vh;
  padding-top: 100px;
  box-sizing: border-box;
`;

// 認証チェック済みフラグ
export const IsCheckedAuthContext = createCtx<boolean>();


export function Main() {

    console.log("Main render");

    const { isCheckedAuth, } = useMain();

    return (
        <Routes>
            <Route
                path={ROUTER_PATH.UPDATE_USER_INFO}
                element={<UpdateUserInfo />}
            />
            <Route
                path={ROUTER_PATH.UPDATE_USER_PASSWORD}
                element={<UpdateUserPassword />}
            />
            <Route
                path={`/*`}
                element={
                    <AppDiv>
                        <IsCheckedAuthContext.Provider value={isCheckedAuth}>
                            {/* ヘッダ */}
                            <Header />
                            {/* コンテンツ */}
                            <Content />
                        </IsCheckedAuthContext.Provider>
                        {/* フッター */}
                        <Footer />
                    </AppDiv>
                }
            />
        </Routes>

    );
}