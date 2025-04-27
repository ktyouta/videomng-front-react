import React from "react";
import { Home } from "../../Home/Component/Home";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { HOME_ROOT_PATH } from "../../Home/Const/HomeConst";
import { FAVORITE_ROOT_PATH } from "../../Favorite/Const/FavoriteConst";
import { Favorite } from "../../Favorite/Component/Favorite";
import { useContent } from "../Hook/useContent";
import { Provider } from "jotai";
import { NotFound } from "../../NotFound/Component/NotFound";

const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 1%;
`;

export function Content() {

    console.log("Content render");

    const { isLogin } = useContent();

    return (
        <Parent>
            <Routes>
                <Route
                    path={`${HOME_ROOT_PATH}/*`}
                    element={<Provider><Home /></Provider>}
                />
                {
                    isLogin &&
                    <Route
                        path={`${FAVORITE_ROOT_PATH}/*`}
                        element={<Provider><Favorite /></Provider>}
                    />
                }
                <Route
                    key={"*"}
                    path="*"
                    element={<NotFound backUrl={`${HOME_ROOT_PATH}`} />}
                />
            </Routes>
        </Parent>
    );
}