import { IconType } from "react-icons";
import styled from "styled-components";
import { IconComponent } from "../../../../components/IconComponent";
import { BUTTON_HOVER_BG_COLOR } from "../../../../consts/ButtonInteractionConst";

//コンテンツのスタイル
const ContentDiv = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 29px;
    padding: 8px 16px;
    border-radius: 8px;
    box-sizing: border-box;
    transition: background-color 0.15s ease;

    &:hover {
        background-color: ${BUTTON_HOVER_BG_COLOR};
    }
`;

type propsType = {
    title: string,
    icon: IconType,
    onClick: () => void,
}

export function HeaderUserMenuContent(props: propsType) {

    console.log(`HeaderUserMenuContent render`);

    return (
        <ContentDiv
            onClick={props.onClick}
        >
            <IconComponent
                icon={props.icon}
                size="18px"
                style={{ color: "white" }}
            />
            {props.title}
        </ContentDiv>
    );
}