import styled, { CSSProperties } from "styled-components";


const ErrMessageDiv = styled.div`
    font-size: 15px;
    color: red;
    white-space: pre-line;
`;

export type ErrMessagePropsType = {
    message: string,
    style?: CSSProperties,
}

export function ErrorMessage(props: ErrMessagePropsType) {

    return (
        <ErrMessageDiv
            style={props.style}
        >
            {props.message}
        </ErrMessageDiv>
    );
}