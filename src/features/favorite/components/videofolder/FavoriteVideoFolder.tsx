import React from "react";
import { FavoriteVideoFolderVideoArea } from "./videoarea/FavoriteVideoFolderVideoArea";
import styled from "styled-components";
import { FavoriteSearchArea } from "./searcharea/FavoriteSearchArea";
import { FavoriteVideoFolderDisplayVideoListProvider } from "./FavoriteVideoFolderDisplayVideoListProvider";
import { useFavoriteVideoFolderVideoList } from "../../hooks/videofolder/useFavoriteVideoFolderVideoList";
import { FavoriteVideoFolderSearchConditionValueProvider } from "./FavoriteVideoFolderSearchConditionValueProvider";
import { IconComponent } from "../../../../components/IconComponent";
import { FaArrowLeft } from "react-icons/fa6";


const Parent = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top:1%;
`;


export function FavoriteVideoFolder() {

    console.log("FavoriteVideoFolder render");

    const { back } = useFavoriteVideoFolderVideoList();

    return (
        <Parent>
            <IconComponent
                icon={FaArrowLeft}
                size="20"
                style={{
                    "color": "white",
                    "position": "absolute",
                    "top": "18%",
                    "left": "3%",
                }}
                onclick={back}
            />
            <FavoriteVideoFolderDisplayVideoListProvider>
                <FavoriteVideoFolderSearchConditionValueProvider>
                    {/* 検索条件エリア */}
                    <FavoriteSearchArea />
                    {/* 動画表示エリア */}
                    <FavoriteVideoFolderVideoArea />
                </FavoriteVideoFolderSearchConditionValueProvider>
            </FavoriteVideoFolderDisplayVideoListProvider>
        </Parent>
    );
}