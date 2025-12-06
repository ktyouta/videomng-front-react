import { CSSProperties } from "react";
import styled from "styled-components";

const Parent = styled.div<{ color?: string, width?: string, height?: string, }>`
    width: ${({ width }) => width || "20px"};
    height: ${({ height }) => height || "20px"};
    border: 1px solid #666;
    background-color: ${({ color }) => color ?? "transparent"};
`;

type propsType = {
    color: string,
    width?: string,
    height?: string,
    style?: CSSProperties,
}

export function ColorPreview(props: propsType) {

    return (
        <Parent
            color={props.color}
            width={props.width}
            height={props.height}
            style={props.style}
        />
    );
}