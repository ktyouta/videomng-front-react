import React, { createContext } from "react";
import { HomeVideoList } from "./VideoList/HomeVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HomeVideoDetail } from "./VideoDetail/HomeVideoDetail";
import { useHome } from "../Hook/useHome";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { NotFound } from "../../NotFound/Component/NotFound";
import { HomeChannel } from "./VideoChannel/HomeChannel";
import { HomeVideoNowSearchConditionValueProvider } from "./HomeVideoNowSearchConditionValueProvider";


export function Home() {

    console.log("Home render");

    const {
        isLoadingComp,
    } = useHome();

    return (
        <HomeVideoNowSearchConditionValueProvider>
            <Routes>
                {/* 動画一覧 */}
                <Route
                    path={`/`}
                    element={
                        <HomeVideoList />
                    }
                />
                {/* 動画詳細 */}
                <Route
                    path={`${ROUTER_PATH.HOME.DETAIL}/*`}
                    element={
                        <HomeVideoDetail />
                    }
                />
                {/* チャンネル動画一覧 */}
                <Route
                    path={`${ROUTER_PATH.HOME.CHANNEL}/*`}
                    element={
                        <Provider>
                            <HomeChannel />
                        </Provider>
                    }
                />
                {
                    isLoadingComp &&
                    // Not Found
                    <Route
                        key={"*"}
                        path="*"
                        element={<NotFound backUrl={`${ROUTER_PATH.HOME.ROOT}`} />}
                    />
                }
            </Routes>
        </HomeVideoNowSearchConditionValueProvider>
    );
}