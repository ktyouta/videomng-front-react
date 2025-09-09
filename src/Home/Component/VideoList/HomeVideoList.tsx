import React from "react";
import { HomeSearchArea } from "./HomeSearchArea";
import { HomeVideoArea } from "./HomeVideoArea";
import styled from "styled-components";
import { useHomeVideoList } from "../../Hook/VideoList/useHomeVideoList";
import { HomeVideoSearchConditionValueProvider } from "./HomeVideoSearchConditionValueProvider";
import { HomeVideoAreaDefault } from "./HomeVideoAreaDefault";


const Parent = styled.div`
  width: 100%;
`;

export function HomeVideoList() {

    console.log("HomeVideoList render");

    const { nowSearchCondition } = useHomeVideoList();

    const searchKeyword = nowSearchCondition.keyword;

    return (
        <HomeVideoSearchConditionValueProvider>
            <Parent>
                {/* 検索条件エリア */}
                <HomeSearchArea />
                {
                    // 検索前後で表示を切り替える
                    searchKeyword
                        ?
                        // 検索結果表示
                        <HomeVideoArea />
                        :
                        // 初期表示
                        <HomeVideoAreaDefault />
                }
            </Parent>
        </HomeVideoSearchConditionValueProvider>
    );
}