import React from "react";
import { FavoriteVideoList } from "./FavoriteVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FAVORITE_ROOT_PATH } from "../Const/FavoriteConst";
import { FavoriteVideoDetail } from "./FavoriteVideoDetail";
import { useFavorite } from "../Hook/useFavorite";


export function Favorite() {

    console.log("Favorite render");

    const { videoId } = useFavorite();

    return (
        <React.Fragment>
            <Routes>
                <Route
                    path={`/`}
                    element={
                        <FavoriteVideoList />
                    }
                >
                </Route>
                <Route
                    path={videoId}
                    element={
                        <FavoriteVideoDetail />
                    } />
            </Routes>
        </React.Fragment>
    );
}