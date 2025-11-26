import React from "react";
import { FavoriteVideoList } from "./videolist/FavoriteVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FavoriteVideoDetail } from "./videodetail/FavoriteVideoDetail";
import { createCtx } from "../../../utils/createCtx";
import { Provider } from "jotai";
import { ROUTER_PATH } from "../../../consts/RouterPath";
import { NotFound } from "../../notfound/components/NotFound";
import { FavoriteVideoSearchConditionValueProvider } from "./FavoriteVideoSearchConditionValueProvider";
import { FavoriteVideoFolder } from "./videofolder/FavoriteVideoFolder";


export function Favorite() {

    console.log("Favorite render");

    return (
        <Routes>
            {/* お気に入り動画一覧 */}
            <Route
                path={`/`}
                element={
                    <FavoriteVideoSearchConditionValueProvider>
                        <FavoriteVideoList />
                    </FavoriteVideoSearchConditionValueProvider>
                }
            >
            </Route>
            {/* お気に入り動画詳細 */}
            <Route
                path={`${ROUTER_PATH.FAVORITE.DETAIL}/:videoId/*`}
                element={
                    <FavoriteVideoDetail />
                } >
            </Route>
            {/* お気に入り動画フォルダー */}
            <Route
                path={`${ROUTER_PATH.FAVORITE.FOLDER}/:folderId/*`}
                element={
                    <FavoriteVideoFolder />
                } >
            </Route>
            {/* Not Found */}
            <Route
                key={"*"}
                path="*"
                element={
                    <NotFound
                        backUrl={`${ROUTER_PATH.FAVORITE.ROOT}`}
                    />
                }
            />
        </Routes>
    );
}