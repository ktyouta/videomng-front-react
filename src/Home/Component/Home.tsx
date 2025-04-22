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


export function Home() {

    console.log("Home render");

    const {
        videoId,
        setVideoId
    } = useHome();

    return (
        <React.Fragment>
            <Routes>
                <Route
                    path={`/`}
                    element={
                        <Provider>
                            <SetVideoIdContext.Provider value={setVideoId}>
                                <HomeVideoList />
                            </SetVideoIdContext.Provider>
                        </Provider>
                    }
                >
                </Route>
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