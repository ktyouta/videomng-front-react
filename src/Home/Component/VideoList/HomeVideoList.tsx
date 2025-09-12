import React from "react";
import { HomeSearchArea } from "./SearchArea/HomeSearchArea";
import { HomeVideoArea } from "./VideoArea/HomeVideoArea";
import styled from "styled-components";
import { useHomeVideoList } from "../../Hook/VideoList/useHomeVideoList";
import { HomeVideoSearchConditionValueProvider } from "./HomeVideoSearchConditionValueProvider";
import { HomeVideoAreaDefault } from "./VideoArea/Default/HomeVideoAreaDefault";


const Parent = styled.div`
  width: 100%;
`;

export function HomeVideoList() {

    console.log("HomeVideoList render");

    useHomeVideoList();

    return (
        <HomeVideoSearchConditionValueProvider>
            <Parent>
                {/* 検索条件エリア */}
                <HomeSearchArea />
                {/* 動画表示エリア */}
                <HomeVideoArea />
            </Parent>
        </HomeVideoSearchConditionValueProvider>
    );
}