import React from "react";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { HomeCommentList } from "./HomeCommentList";


const Parent = styled.div`
  box-sizing:border-box;
  height: 502px;
  background-color: #181a1e;
  border-radius: 1%;
  border: solid 1px;
`;


type propsType = {
    videoId: string,
}

export function HomeComment(props: propsType) {

    console.log("HomeComment render");

    return (
        <Parent>
            {/* コメントリスト */}
            <HomeCommentList
                videoId={props.videoId}
            />
        </Parent>
    );
}