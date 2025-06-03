import React, { createContext } from "react";
import { HomeVideoList } from "./HomeVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HomeVideoDetail } from "./HomeVideoDetail";
import { useHome } from "../Hook/useHome";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { NotFound } from "../../NotFound/Component/NotFound";
import { HomeChannel } from "./HomeChannel";

// 動画ID
export const VideoIdContext = createCtx<string>();
// 動画ID(setter)
export const SetVideoIdContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// 動画取得用URL
export const VideoApiUrlContext = createCtx<string>();
// 動画取得用URL(setter)
export const SetVideoApiUrlContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();
// チャンネルID
export const ChannelIdContext = createCtx<string>();
// チャンネルID(setter)
export const SetChannelIdContext = createCtx<React.Dispatch<React.SetStateAction<string>>>();


export function Home() {

    console.log("Home render");

    const {
        videoId,
        setVideoId,
        videoApiUrl,
        setVideoApiUrl,
        isLoadingComp,
        channelId,
        setChannelId,
    } = useHome();

    return (
        <React.Fragment>
            <Routes>
                {/* 動画一覧 */}
                <Route
                    path={`/`}
                    element={
                        <SetChannelIdContext.Provider value={setChannelId}>
                            <SetVideoIdContext.Provider value={setVideoId}>
                                <VideoApiUrlContext.Provider value={videoApiUrl}>
                                    <SetVideoApiUrlContext.Provider value={setVideoApiUrl}>
                                        <HomeVideoList />
                                    </SetVideoApiUrlContext.Provider>
                                </VideoApiUrlContext.Provider>
                            </SetVideoIdContext.Provider>
                        </SetChannelIdContext.Provider>
                    }
                />
                {/* 動画詳細 */}
                <Route
                    path={`${ROUTER_PATH.HOME.DETAIL}/${videoId}`}
                    element={
                        <Provider>
                            <VideoIdContext.Provider value={videoId}>
                                <HomeVideoDetail />
                            </VideoIdContext.Provider>
                        </Provider>
                    }
                />
                {/* チャンネル動画一覧 */}
                <Route
                    path={`${ROUTER_PATH.HOME.CHANNEL}/${channelId}`}
                    element={
                        <Provider>
                            <ChannelIdContext.Provider value={channelId}>
                                <SetVideoIdContext.Provider value={setVideoId}>
                                    <HomeChannel />
                                </SetVideoIdContext.Provider>
                            </ChannelIdContext.Provider>
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
        </React.Fragment>
    );
}