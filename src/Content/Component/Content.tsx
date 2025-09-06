import React from "react";
import { Home } from "../../Home/Component/Home";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useContent } from "../Hook/useContent";
import { Provider } from "jotai";
import { NotFound } from "../../NotFound/Component/NotFound";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { BackToTopIcon } from "./BackToTopIcon";
import { Favorite } from "../../Favorite/Component/Favorite";

const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  padding-top: 115px;
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
                    path={`${ROUTER_PATH.HOME.ROOT}/*`}
                    element={
                        <Provider>
                            <Home />
                        </Provider>
                    }
                />
                {
                    isLogin &&
                    <Route
                        path={`${ROUTER_PATH.FAVORITE.ROOT}/*`}
                        element={
                            <Favorite />
                        }
                    />
                }
                {
                    isCheckedAuth &&
                    <Route
                        key={"*"}
                        path="*"
                        element={<NotFound backUrl={`${ROUTER_PATH.HOME.ROOT}`} />}
                    />
                }
            </Routes>
            <BackToTopIcon />
        </Parent>
    );
}