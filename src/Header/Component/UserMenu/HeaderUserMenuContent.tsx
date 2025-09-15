import React from "react";
import ButtonComponent from "../../../Common/Component/ButtonComponent";
import { useHeaderUserMenu } from "../../Hook/UserMenu/useHeaderUserMenu";
import { IconComponent } from "../../../Common/Component/IconComponent";
import { IoPersonCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../../../Common/Const/CommonConst";
import { MEDIA } from "../../../Common/Const/MediaConst";
import { useHeaderUserMenuList } from "../../Hook/UserMenu/useHeaderUserMenuList";



//コンテンツのスタイル
const ContentDiv = styled.div`
    cursor:pointer;
    &:hover {
        text-decoration: underline;
    }
    min-height: 29px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 2px;
`;

type propsType = {
    title: string,
    onClick: () => void,
}

export function HeaderUserMenuContent(props: propsType) {

    console.log(`HeaderUserMenuContent render`);

    return (
        <ContentDiv
            onClick={props.onClick}
        >
            {props.title}
        </ContentDiv>
    );
}