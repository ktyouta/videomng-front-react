import React from "react";
import { FavoriteSearchAreaPc } from "./FavoriteSearchAreaPc";
import { FavoriteVideoArea } from "./FavoriteVideoArea";
import styled from "styled-components";
import { useFavoriteVideoList } from "../../Hook/VideoList/useFavoriteVideoList";
import { FavoriteSearchAreaMobile } from "./FavoriteSearchAreaMobile";
import { FavoriteSearchArea } from "./FavoriteSearchArea";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
`;


export function FavoriteVideoList() {

    console.log("FavoriteVideoList render");

    useFavoriteVideoList();

    return (
        <Parent>
            {/* 検索条件エリア */}
            <FavoriteSearchArea />
            {/* 動画表示エリア */}
            <FavoriteVideoArea />
        </Parent>
    );
}