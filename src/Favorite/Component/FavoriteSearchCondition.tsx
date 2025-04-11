import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteSearchConditionHeader } from "./FavoriteSearchConditionHeader";
import { FavoriteSearchConditionMain } from "./FavoriteSearchConditionMain";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
`;

type propsType = {
    close: () => void;
}

export function FavoriteSearchCondition(props: propsType) {

    console.log("FavoriteSearchCondition render");

    return (
        <Parent>
            {/* 検索条件指定ヘッダ */}
            <FavoriteSearchConditionHeader
                close={props.close}
            />
            {/* 検索条件指定コンテンツ */}
            <FavoriteSearchConditionMain />
        </Parent>
    );
}