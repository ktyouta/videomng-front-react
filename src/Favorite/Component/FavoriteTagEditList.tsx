import styled from "styled-components";
import { useFavoriteMemoList } from "../Hook/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import LoadingBase from "../../Common/Component/LoadingBase";
import { useFavoriteTagList } from "../Hook/useFavoriteTagList";
import { FavoriteVideoTagType } from "../Type/FavoriteVideoTagType";
import React from "react";
import TagButtonComponent from "../../Common/Component/TagButtonComponent";
import { useFavoriteTagEditList } from "../Hook/useFavoriteTagEditList";
import { tagType } from "../../Common/Component/TagsComponent";
import { MEDIA } from "../../Common/Const/MediaConst";


const Parent = styled.div`
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 4%;
  padding-right: 2%;
  color:white;
`;

const TagListTitleDiv = styled.div`
    box-sizing: border-box;
    padding-left: 1%;
    font-size: 14px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        font-size: 17px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        font-size: 17px;
    }

    @media (min-width: ${MEDIA.PC}) {
        font-size: 17px;
    }
`;

const TagListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 2% 1% 1% 1%;
`;


export function FavoriteTagEditList() {

    console.log("FavoriteTagEditList render");

    const {
        favoriteVideoTagEditList,
        deleteTag } = useFavoriteTagEditList();

    if (!favoriteVideoTagEditList) {
        return;
    }

    return (
        <Parent>
            <TagListTitleDiv>
                設定されたタグ
            </TagListTitleDiv>
            {
                favoriteVideoTagEditList.length > 0 ?
                    <TagListAreaDiv>
                        {
                            favoriteVideoTagEditList.map((e: tagType, index: number) => {

                                const tagKey = e.label;

                                return (
                                    <TagButtonComponent
                                        title={e.label}
                                        btnStyle={{
                                            marginRight: "15px",
                                            marginBottom: "10px"
                                        }}
                                        isDispCross={true}
                                        onclick={() => {
                                            deleteTag(index);
                                        }}
                                        key={tagKey}
                                    />
                                )
                            })
                        }
                    </TagListAreaDiv>
                    :
                    `タグが設定されていません。`
            }
        </Parent>
    );
}