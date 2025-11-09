import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Provider } from "jotai";
import { useContent } from "../hooks/useContent";
import { ROUTER_PATH } from "../../../consts/RouterPath";
import { Home } from "../../home/components/Home";
import { Favorite } from "../../favorite/components/Favorite";
import { NotFound } from "../../notfound/components/NotFound";
import { BackToTopIcon } from "./BackToTopIcon";

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
                        <Home />
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
                        element={
                            <NotFound
                                backUrl={`${ROUTER_PATH.HOME.ROOT}`}
                            />
                        }
                    />
                }
            </Routes>
            <BackToTopIcon />
        </Parent>
    );
}