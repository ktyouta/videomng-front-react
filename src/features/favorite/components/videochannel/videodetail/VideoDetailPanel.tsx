import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";
import { MEDIA } from "../../../../../consts/MediaConst";

const Parent = styled.div`
  box-sizing:border-box;
  background-color: #181a1e;
  border-radius: 7px;
  border: solid 1px;
  padding: 10px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    padding: 18px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    padding: 18px;
  }

  @media (min-width: ${MEDIA.PC}) {
    padding: 18px;
  }
`;

type propsType = {
    children: ReactNode,
    style?: CSSProperties,
}

export function VideoDetailPanel(props: propsType) {

    return (
        <Parent
            style={props.style}
        >
            {props.children}
        </Parent>
    );
}