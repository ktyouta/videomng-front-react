import React from "react";
import { FavoriteVideoList } from "./FavoriteVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FAVORITE_ROOT_PATH } from "../Const/FavoriteConst";
import { FavoriteVideoDetail } from "./FavoriteVideoDetail";
import { useFavorite } from "../Hook/useFavorite";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";
import { comboType } from "../../Common/Component/ComboComponent";

// お気に入り動画ID
export const FavoriteVideoIdContext = createCtx<string>();
// お気に入り動画ID(setter)
export const SetFavoriteVideoIdContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 視聴状況リスト
export const ViewStatusListContext = createCtx<comboType[]>();


export function Favorite() {

    console.log("Favorite render");

    const {
        favoriteVideoId,
        setFavoriteVideoId,
        viewStatusList, } = useFavorite();

    return (
        <ViewStatusListContext.Provider value={viewStatusList}>
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
                        <Provider>
                            <FavoriteVideoIdContext.Provider value={favoriteVideoId}>
                                <FavoriteVideoDetail />
                            </FavoriteVideoIdContext.Provider>
                        </Provider>
                    } >
                </Route>
            </Routes>
        </ViewStatusListContext.Provider>
    );
}