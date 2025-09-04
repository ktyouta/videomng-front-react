import React from "react";
import { FavoriteVideoList } from "./VideoList/FavoriteVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FavoriteVideoDetail } from "./VideoDetail/FavoriteVideoDetail";
import { useFavoriteMain } from "../Hook/useFavoriteMain";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";
import { comboType } from "../../Common/Component/ComboComponent";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { NotFound } from "../../NotFound/Component/NotFound";
import { FavoriteVideoSearchConditionValueProvider } from "./FavoriteVideoSearchConditionValueProvider";

// お気に入り動画ID
export const FavoriteVideoIdContext = createCtx<string>();
// お気に入り動画ID(setter)
export const SetFavoriteVideoIdContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 視聴状況リスト
export const ViewStatusListContext = createCtx<comboType[]>();


export function FavoriteMain() {

    console.log("Favorite render");

    const {
        favoriteVideoId,
        setFavoriteVideoId,
        viewStatusList } = useFavoriteMain();

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
                    path={`${ROUTER_PATH.FAVORITE.DETAIL}/*`}
                    element={
                        <FavoriteVideoIdContext.Provider value={favoriteVideoId}>
                            <SetFavoriteVideoIdContext.Provider value={setFavoriteVideoId}>
                                <FavoriteVideoDetail />
                            </SetFavoriteVideoIdContext.Provider>
                        </FavoriteVideoIdContext.Provider>
                    } >
                </Route>
                {/* Not Found */}
                <Route
                    key={"*"}
                    path="*"
                    element={<NotFound backUrl={`${ROUTER_PATH.FAVORITE.ROOT}`} />}
                />
            </Routes>
        </ViewStatusListContext.Provider>
    );
}