import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

const Parent = styled.div`
  box-sizing:border-box;
  min-height: 60vh;
  background-color: #181a1e;
  border-radius: 7px;
  border: solid 1px;
  padding: 18px;
`;

type propsType = {
    children: ReactNode,
    style?: CSSProperties,
}

export function FavoriteVideoDetailPanel(props: propsType) {

    return (
        <Parent
            style={props.style}
        >
            {props.children}
        </Parent>
    );
}