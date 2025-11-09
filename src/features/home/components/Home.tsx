import React, { createContext } from "react";
import { HomeVideoList } from "./videolist/HomeVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HomeVideoDetail } from "./videodetail/HomeVideoDetail";
import { createCtx } from "../../../utils/createCtx";
import { Provider } from "jotai";
import { ROUTER_PATH } from "../../../consts/RouterPath";
import { NotFound } from "../../notfound/components/NotFound";
import { HomeChannel } from "./videochannel/HomeChannel";
import { HomeVideoNowSearchConditionValueProvider } from "./HomeVideoNowSearchConditionValueProvider";


export function Home() {

    console.log("Home render");

    return (
        <Routes>
            {/* 動画一覧 */}
            <Route
                path={`/`}
                element={
                    <HomeVideoNowSearchConditionValueProvider>
                        <HomeVideoList />
                    </HomeVideoNowSearchConditionValueProvider>
                }
            />
            {/* 動画詳細 */}
            <Route
                path={`${ROUTER_PATH.HOME.DETAIL}/:videoId/*`}
                element={
                    <HomeVideoDetail />
                }
            />
            {/* チャンネル動画一覧 */}
            <Route
                path={`${ROUTER_PATH.HOME.CHANNEL}/:channelId/*`}
                element={
                    <HomeChannel />
                }
            />
            {
                // Not Found
                <Route
                    key={"*"}
                    path="*"
                    element={
                        <NotFound
                            backUrl={`${ROUTER_PATH.HOME.ROOT}`}
                        />
                    }
                />
            }
        </Routes>
    );
}