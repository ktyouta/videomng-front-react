import React, { createContext } from "react";
import { HomeVideoList } from "./VideoList/HomeVideoList";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HomeVideoDetail } from "./VideoDetail/HomeVideoDetail";
import { createCtx } from "../../Common/Function/createCtx";
import { Provider } from "jotai";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";
import { NotFound } from "../../NotFound/Component/NotFound";
import { HomeChannel } from "./VideoChannel/HomeChannel";
import { HomeVideoNowSearchConditionValueProvider } from "./HomeVideoNowSearchConditionValueProvider";
import { HomeRouter } from "./HomeRouter";


export function Home() {

    console.log("Home render");

    return (
        <HomeVideoNowSearchConditionValueProvider>
            <HomeRouter />
        </HomeVideoNowSearchConditionValueProvider>
    );
}