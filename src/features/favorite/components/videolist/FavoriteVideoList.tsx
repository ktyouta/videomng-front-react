import React from "react";
import { FavoriteSearchAreaPc } from "./searcharea/FavoriteSearchAreaPc";
import { FavoriteVideoArea } from "./videoarea/FavoriteVideoArea";
import styled from "styled-components";
import { FavoriteSearchAreaMobile } from "./searcharea/FavoriteSearchAreaMobile";
import { FavoriteSearchArea } from "./searcharea/FavoriteSearchArea";
import { FavoriteVideoDisplayVideoListProvider } from "./FavoriteVideoDisplayVideoListProvider";
import { useFavoriteVideoList } from "../../hooks/videolist/useFavoriteVideoList";


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
            <FavoriteVideoDisplayVideoListProvider>
                {/* 検索条件エリア */}
                <FavoriteSearchArea />
                {/* 動画表示エリア */}
                <FavoriteVideoArea />
            </FavoriteVideoDisplayVideoListProvider>
        </Parent>
    );
}