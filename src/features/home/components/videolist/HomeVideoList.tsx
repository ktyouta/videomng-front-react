import styled from "styled-components";
import { HomeVideoNowSearchConditionValueProvider } from "../HomeVideoNowSearchConditionValueProvider";
import { HomeVideoSearchConditionValueProvider } from "./HomeVideoSearchConditionValueProvider";
import { HomeSearchArea } from "./searcharea/HomeSearchArea";
import { HomeVideoArea } from "./videoarea/HomeVideoArea";


const Parent = styled.div`
  width: 100%;
`;

export function HomeVideoList() {

    console.log("HomeVideoList render");

    return (
        <HomeVideoNowSearchConditionValueProvider>
            <HomeVideoSearchConditionValueProvider>
                <Parent>
                    {/* 検索条件エリア */}
                    <HomeSearchArea />
                    {/* 動画表示エリア */}
                    <HomeVideoArea />
                </Parent>
            </HomeVideoSearchConditionValueProvider>
        </HomeVideoNowSearchConditionValueProvider>
    );
}