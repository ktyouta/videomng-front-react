import React from "react";
import { FavoriteVideoList } from "./VideoList/FavoriteVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FavoriteVideoDetail } from "./VideoDetail/FavoriteVideoDetail";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";
import { comboType } from "../../Common/Component/ComboComponent";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { NotFound } from "../../NotFound/Component/NotFound";
import { FavoriteVideoSearchConditionValueProvider } from "./FavoriteVideoSearchConditionValueProvider";


export function Favorite() {

    console.log("Favorite render");

    return (
        <FavoriteVideoSearchConditionValueProvider>
            <Routes>
                {/* お気に入り動画一覧 */}
                <Route
                    path={`/`}
                    element={
                        <FavoriteVideoList />
                    }
                >
                </Route>
                {/* お気に入り動画詳細 */}
                <Route
                    path={`${ROUTER_PATH.FAVORITE.DETAIL}/*`}
                    element={
                        <FavoriteVideoDetail />
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
        </FavoriteVideoSearchConditionValueProvider>
    );
}