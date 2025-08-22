import React from "react";
import { HomeSearchArea } from "./HomeSearchArea";
import { HomeVideoArea } from "./HomeVideoArea";
import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
`;


export function HomeVideoList() {

    console.log("HomeVideoList render");

    return (
        <Parent>
            {/* 検索条件エリア */}
            <HomeSearchArea />
            {/* 動画表示エリア */}
            <HomeVideoArea />
        </Parent>
    );
}