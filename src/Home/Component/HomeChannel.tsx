import React from "react";
import styled from "styled-components";
import { HomeChannelVideoArea } from "./HomeChannelVideoArea";
import { HomeChannelHeader } from "./HomeChannelHeader";


const Parent = styled.div`
  width: 100%;
`;

export function HomeChannel() {

    console.log("HomeChannel render");

    return (
        <Parent>
            {/* ヘッダ */}
            <HomeChannelHeader />
            {/* 動画表示エリア */}
            <HomeChannelVideoArea />
        </Parent>
    );
}