import React from "react";
import { HomeVideoList } from "./HomeVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../Const/HomeConst";
import { HomeVideoDetail } from "./HomeVideoDetail";
import { useHome } from "../Hook/useHome";


export function Home() {

    console.log("Home render");

    const { videoId } = useHome();

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
                <Route
                    path={videoId}
                    element={
                        <HomeVideoDetail />
                    }></Route>
            </Routes>
        </React.Fragment>
    );
}