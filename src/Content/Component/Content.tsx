import React from "react";
import { Home } from "../../Home/Component/Home";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Favorite } from "../../Favorite/Component/Favorite";
import { useContent } from "../Hook/useContent";
import { Provider } from "jotai";
import { NotFound } from "../../NotFound/Component/NotFound";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";

const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  padding-top: 100px;
  margin-top: 1%;
`;

export function Content() {

    console.log("Content render");

    const {
        isLogin,
        isCheckedAuth } = useContent();

    return (
        <Parent>
            <Routes>
                <Route
                    path={`${ROUTER_PATH.HOME}/*`}
                    element={
                        <Provider>
                            <Home />
                        </Provider>
                    }
                />
                {
                    isLogin &&
                    <Route
                        path={`${ROUTER_PATH.FAVORITE}/*`}
                        element={
                            <Provider>
                                <Favorite />
                            </Provider>
                        }
                    />
                }
                {
                    isCheckedAuth &&
                    <Route
                        key={"*"}
                        path="*"
                        element={<NotFound backUrl={`${ROUTER_PATH.HOME}`} />}
                    />
                }
            </Routes>
        </Parent>
    );
}