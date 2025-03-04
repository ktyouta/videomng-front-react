import React from "react";
import { HomeVideoList } from "./HomeVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../Const/HomeConst";


export function Home() {

    console.log("Home render");

    return (
        <React.Fragment>
            <Routes>
                <Route
                    path={HOME_ROOT_PATH}
                    element={
                        <HomeVideoList />
                    }
                >
                </Route>
            </Routes>
        </React.Fragment>
    );
}