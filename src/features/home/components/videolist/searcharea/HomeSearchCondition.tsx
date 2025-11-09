import React from "react";
import { IconComponent } from "../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { HomeSearchConditionHeader } from "./HomeSearchConditionHeader";
import { HomeSearchConditionMain } from "./HomeSearchConditionMain";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
`;

type propsType = {
    close: () => void;
}

export function HomeSearchCondition(props: propsType) {

    console.log("HomeSearchCondition render");

    return (
        <Parent>
            {/* 検索条件指定ヘッダ */}
            <HomeSearchConditionHeader
                close={props.close}
            />
            {/* 検索条件指定コンテンツ */}
            <HomeSearchConditionMain />
        </Parent>
    );
}