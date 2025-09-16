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
import { FavoriteRouter } from "./FavoriteRouter";


export function Favorite() {

    console.log("Favorite render");

    return (
        <FavoriteVideoSearchConditionValueProvider>
            <FavoriteRouter />
        </FavoriteVideoSearchConditionValueProvider>
    );
}