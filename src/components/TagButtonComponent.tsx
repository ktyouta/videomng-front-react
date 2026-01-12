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
    tagColor?: string,
    tagTitleColor?: string,
}


//ボタンの基本スタイル
const BaseButton = styled.button<{ width?: string, heght?: string, isDispCross?: boolean, isCursorPointer: boolean, tagColor?: string, tagTitleColor?: string }>`
    width:${({ width }) => (width ?? "")};
    heght:${({ heght }) => (heght ?? "")};
    padding: .375rem .5rem;
    border: 1px solid ${({ tagColor }) => (tagColor ?? "linear-gradient(135deg, #3b82f6, #2563eb)")};
    border-radius: 6px;
    background:${({ tagColor }) => (tagColor ?? "linear-gradient(135deg, #3b82f6, #2563eb)")};
    color:${({ tagTitleColor }) => (tagTitleColor ?? "#181818")};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-align: left;
    cursor:${({ isCursorPointer }) => (isCursorPointer ? "pointer" : "default")};
    min-width: 82px;
    text-align: center;
        &:focus {
        outline: none;
    }
        
    &:focus-visible {
        outline: none;
    }
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
    color: #bdbdc3;
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
            tagColor={props.tagColor}
            tagTitleColor={props.tagTitleColor}
            style={props.btnStyle}
            onClick={props.onclick}
            isCursorPointer={!!props.onclick}
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