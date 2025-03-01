import React from "react";
import styled from "styled-components";
import BaseTextbox from "../../Common/Component/BaseTextbox";

const Parent = styled.div`
  width: 100%;
  height: 10%;
`;

const TextArea = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`;


/**
 * 検索条件エリア
 */
export function HomeSearchArea() {

    return (
        <Parent>
            <TextArea>
                <BaseTextbox
                    textWidth="47%"
                    placeholder="キーワード"
                />
            </TextArea>
        </Parent>
    );
}