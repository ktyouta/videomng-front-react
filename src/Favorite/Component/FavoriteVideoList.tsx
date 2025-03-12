import React from "react";
import { FavoriteSearchArea } from "./FavoriteSearchArea";
import { FavoriteVideoArea } from "./FavoriteVideoArea";
import styled from "styled-components";


const Parent = styled.div`
  width: 100%;
`;


export function FavoriteVideoList() {

    console.log("FavoriteVideoList render");

    return (
        <Parent>
            {/* 検索条件エリア */}
            <FavoriteSearchArea />
            {/* 動画表示エリア */}
            <FavoriteVideoArea />
        </Parent>
    );
}