import React from "react";
import { FavoriteSearchAreaPc } from "./SearchArea/FavoriteSearchAreaPc";
import { FavoriteVideoArea } from "./VideoArea/FavoriteVideoArea";
import styled from "styled-components";
import { FavoriteSearchAreaMobile } from "./SearchArea/FavoriteSearchAreaMobile";
import { FavoriteSearchArea } from "./SearchArea/FavoriteSearchArea";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
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