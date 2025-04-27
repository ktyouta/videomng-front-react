import styled from "styled-components";
import { useFavoriteMemoList } from "../Hook/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../Type/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "./FavoriteMemoContent";
import LoadingBase from "../../Common/Component/LoadingBase";
import { useFavoriteTagList } from "../Hook/useFavoriteTagList";
import { FavoriteVideoTagType } from "../Type/FavoriteVideoTagType";
import React from "react";
import TagButtonComponent from "../../Common/Component/TagButtonComponent";


const Parent = styled.div`
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 2%;
  color:white;
`;

const TagListAreaDiv = styled.div`
  width: 97%;
  height: 90%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0% 1% 1% 1%;
`;

const TagListAreaTitleDiv = styled.div`
  box-sizing: border-box;
  margin-bottom: 2%;
`;

export function FavoriteTagList() {

    console.log("FavoriteTagList render");

    const { favoriteVideoTagList } = useFavoriteTagList();

    return (
        <Parent>
            {
                favoriteVideoTagList && favoriteVideoTagList.length > 0 ?
                    <TagListAreaDiv>
                        <TagListAreaTitleDiv>
                            設定タグ
                        </TagListAreaTitleDiv>
                        {
                            favoriteVideoTagList.map((e: FavoriteVideoTagType) => {

                                const tagId = e.tagId;

                                return (
                                    <TagButtonComponent
                                        title={e.tagName}
                                        btnStyle={{
                                            marginRight: "15px"
                                        }}
                                        key={tagId}
                                    />
                                )
                            })
                        }
                    </TagListAreaDiv>
                    :
                    `タグが登録されていません。`
            }
        </Parent>
    );
}