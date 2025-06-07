import React from "react";
import { FavoriteVideoList } from "./FavoriteVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FavoriteVideoDetail } from "./FavoriteVideoDetail";
import { useFavorite } from "../Hook/useFavorite";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";
import { comboType } from "../../Common/Component/ComboComponent";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { NotFound } from "../../NotFound/Component/NotFound";

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
        viewStatusList,
        isLoadingComp, } = useFavorite();

    return (
        <ViewStatusListContext.Provider value={viewStatusList}>
            <Routes>
                {/* お気に入り動画一覧 */}
                <Route
                    path={`/`}
                    element={
                        <SetFavoriteVideoIdContext.Provider value={setFavoriteVideoId}>
                            <FavoriteVideoList />
                        </SetFavoriteVideoIdContext.Provider>
                    }
                >
                </Route>
                {/* お気に入り動画詳細 */}
                <Route
                    path={`${ROUTER_PATH.FAVORITE.DETAIL}/${favoriteVideoId}`}
                    element={
                        <Provider>
                            <FavoriteVideoIdContext.Provider value={favoriteVideoId}>
                                <FavoriteVideoDetail />
                            </FavoriteVideoIdContext.Provider>
                        </Provider>
                    } >
                </Route>
                {
                    isLoadingComp &&
                    // Not Found
                    <Route
                        key={"*"}
                        path="*"
                        element={<NotFound backUrl={`${ROUTER_PATH.FAVORITE.ROOT}`} />}
                    />
                }
            </Routes>
        </ViewStatusListContext.Provider>
    );
}