import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

const Parent = styled.div`
  box-sizing:border-box;
  min-height: 502px;
  background-color: #181a1e;
  border-radius: 7px;
  border: solid 1px;
  padding: 18px;
  display: flex;
  flex-direction: column;
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