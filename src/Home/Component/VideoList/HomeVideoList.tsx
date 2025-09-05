import React from "react";
import { HomeSearchArea } from "./HomeSearchArea";
import { HomeVideoArea } from "./HomeVideoArea";
import styled from "styled-components";
import { useHomeVideoList } from "../../Hook/VideoList/useHomeVideoList";


const Parent = styled.div`
  width: 100%;
`;


export function HomeVideoList() {

    console.log("HomeVideoList render");

    useHomeVideoList();

    return (
        <Parent>
            {/* 検索条件エリア */}
            <HomeSearchArea />
            {/* 動画表示エリア */}
            <HomeVideoArea />
        </Parent>
    );
}