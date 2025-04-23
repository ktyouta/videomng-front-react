import React from "react";
import { FavoriteVideoList } from "./FavoriteVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FAVORITE_ROOT_PATH } from "../Const/FavoriteConst";
import { FavoriteVideoDetail } from "./FavoriteVideoDetail";
import { useFavorite } from "../Hook/useFavorite";
import { createCtx } from "../../Common/Function/createCtx";

// お気に入り動画ID
export const FavoriteVideoIdContext = createCtx<string>();
// お気に入り動画ID(setter)
export const SetFavoriteVideoIdContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();


export function Favorite() {

    console.log("Favorite render");

    const {
        favoriteVideoId,
        setFavoriteVideoId, } = useFavorite();

    return (
        <React.Fragment>
            <Routes>
                <Route
                    path={`/`}
                    element={
                        <SetFavoriteVideoIdContext.Provider value={setFavoriteVideoId}>
                            <FavoriteVideoList />
                        </SetFavoriteVideoIdContext.Provider>
                    }
                >
                </Route>
                <Route
                    path={favoriteVideoId}
                    element={
                        <FavoriteVideoIdContext.Provider value={favoriteVideoId}>
                            <FavoriteVideoDetail />
                        </FavoriteVideoIdContext.Provider>
                    } >
                </Route>
            </Routes>
        </React.Fragment>
    );
}