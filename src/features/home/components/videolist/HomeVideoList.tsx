import React from "react";
import { HomeSearchArea } from "./searcharea/HomeSearchArea";
import { HomeVideoArea } from "./videoarea/HomeVideoArea";
import styled from "styled-components";
import { HomeVideoSearchConditionValueProvider } from "./HomeVideoSearchConditionValueProvider";
import { HomeVideoAreaDefault } from "./videoarea/default/HomeVideoAreaDefault";
import { useHomeVideoList } from "../../hooks/videolist/useHomeVideoList";


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