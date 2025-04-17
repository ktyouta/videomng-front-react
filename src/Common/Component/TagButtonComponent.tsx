import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

//引数の型
type propsType = {
    title: ReactNode,
    onclick?: () => void,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
    btnStyle?: CSSProperties,
    spanStyle?: CSSProperties,
    width?: string,
    heght?: string,
    isDispCross?: boolean,
}


//ボタンの基本スタイル
const BaseButton = styled.button<{ width?: string, heght?: string, isDispCross?: boolean, }>`
    width:${({ width }) => (width ?? "")};
    heght:${({ heght }) => (heght ?? "")};
    padding: .375rem .5rem;
    border: 0;
    border-radius: 3px;
    background: #b0e0e6;
    font-size: inherit;
    line-height: inherit;
    cursor:pointer;
    &:hover {
        color: #fff;
        background-color: #4f46e5;
    }
    text-align: left;
`;

//spanの基本スタイル
const TitleSpan = styled.span`
    margin: 0 .25rem .25rem 0;
    background-color: inherit;
`;

const CrossButtonSpan = styled.span`
    background: none;
    border: none;
    font-size: 20px;
    color: #7c7d86;
    padding: 0;
    &:hover {
        color: #fff;
    }
    outline: none;
    line-height: 1;
`;


const TagButtonComponent = (props: propsType) => {
    return (
        <BaseButton
            heght={props.heght}
            width={props.width}
            isDispCross={props.isDispCross}
            style={props.btnStyle}
            onClick={props.onclick}
        >
            <TitleSpan
                style={props.spanStyle}
            >
                {props.title}
            </TitleSpan>
            {props.isDispCross && (
                <CrossButtonSpan >
                    ×
                </CrossButtonSpan>
            )}
        </BaseButton>
    )
};

export default TagButtonComponent;