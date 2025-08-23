import React from "react";
import { FavoriteSearchArea } from "./FavoriteSearchArea";
import { FavoriteVideoArea } from "./FavoriteVideoArea";
import styled from "styled-components";
import { useFavoriteVideoList } from "../../Hook/VideoList/useFavoriteVideoList";
import { FavoriteSearchAreaMobile } from "./FavoriteSearchAreaMobile";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
`;


export function FavoriteVideoList() {

    console.log("FavoriteVideoList render");

    const { isMobile } = useFavoriteVideoList();

    return (
        <Parent>
            {/* 検索条件エリア */}
            {
                isMobile
                    ?
                    <FavoriteSearchAreaMobile />
                    :
                    <FavoriteSearchArea />
            }
            {/* 動画表示エリア */}
            <FavoriteVideoArea />
        </Parent>
    );
}