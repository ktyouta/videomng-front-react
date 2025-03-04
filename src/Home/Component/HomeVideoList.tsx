import React from "react";
import { HomeSearchArea } from "./HomeSearchArea";
import { HomeVideoArea } from "./HomeVideoArea";

export function HomeVideoList() {

    console.log("HomeVideoList render");

    return (
        <React.Fragment>
            {/* 検索条件エリア */}
            <HomeSearchArea />
            {/* 動画表示エリア */}
            <HomeVideoArea />
        </React.Fragment>
    );
}