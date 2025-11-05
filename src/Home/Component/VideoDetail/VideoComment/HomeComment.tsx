import React from "react";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { HomeCommentList } from "./HomeCommentList";


export function HomeComment() {

    console.log("HomeComment render");

    return (
        <HomeCommentList />
    );
}