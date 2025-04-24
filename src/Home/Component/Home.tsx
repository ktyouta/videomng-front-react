import React, { createContext } from "react";
import { HomeVideoList } from "./HomeVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HOME_ROOT_PATH } from "../Const/HomeConst";
import { HomeVideoDetail } from "./HomeVideoDetail";
import { useHome } from "../Hook/useHome";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";

// 動画ID
export const VideoIdContext = createCtx<string>();
// 動画ID(setter)
export const SetVideoIdContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画取得用URL
export const VideoApiUrlContext = createCtx<string>();
// 動画取得用URL(setter)
export const SetVideoApiUrlContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();


export function Home() {

    console.log("Home render");

    const {
        videoId,
        setVideoId,
        videoApiUrl,
        setVideoApiUrl,
    } = useHome();

    return (
        <React.Fragment>
            <Routes>
                {/* 動画一覧 */}
                <Route
                    path={`/`}
                    element={
                        <Provider>
                            <SetVideoIdContext.Provider value={setVideoId}>
                                <VideoApiUrlContext.Provider value={videoApiUrl}>
                                    <SetVideoApiUrlContext.Provider value={setVideoApiUrl}>
                                        <HomeVideoList />
                                    </SetVideoApiUrlContext.Provider>
                                </VideoApiUrlContext.Provider>
                            </SetVideoIdContext.Provider>
                        </Provider>
                    }
                >
                </Route>
                {/* 動画詳細 */}
                <Route
                    path={`${videoId}`}
                    element={
                        <Provider>
                            <VideoIdContext.Provider value={videoId}>
                                <HomeVideoDetail />
                            </VideoIdContext.Provider>
                        </Provider>
                    }></Route>
            </Routes>
        </React.Fragment>
    );
}