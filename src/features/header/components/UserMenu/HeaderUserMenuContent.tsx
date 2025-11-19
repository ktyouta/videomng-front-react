import React from "react";
import { useHeaderUserMenu } from "../../hooks/UserMenu/useHeaderUserMenu";
import { IconComponent } from "../../../../components/IconComponent";
import { IoPersonCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { Z_INDEX_PARAM } from "../../../../consts/CommonConst";
import { MEDIA } from "../../../../consts/MediaConst";
import { useHeaderUserMenuList } from "../../hooks/UserMenu/useHeaderUserMenuList";



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