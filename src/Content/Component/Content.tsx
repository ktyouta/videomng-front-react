import React from "react";
import { Home } from "../../Home/Component/Home";
import styled from "styled-components";

const Parent = styled.div`
  width: 100%;
`;

export function Content() {

    console.log("Content render");

    return (
        <Parent>
            <Home />
        </Parent>
    );
}