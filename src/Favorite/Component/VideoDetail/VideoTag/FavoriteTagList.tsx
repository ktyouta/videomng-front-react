import styled from "styled-components";
import { useFavoriteMemoList } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../VideoMemo/FavoriteMemoContent";
import LoadingBase from "../../../../Common/Component/LoadingBase";
import { useFavoriteTagList } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTagList";
import { FavoriteVideoTagType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
import React from "react";
import TagButtonComponent from "../../../../Common/Component/TagButtonComponent";
import Loading from "../../../../Common/Component/Loading";


const Parent = styled.div`
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 2%;
  color:white;
  display: flex;
  flex-direction: column;
`;

const LoadingParent = styled(Parent)`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

const TagListAreaDiv = styled.div`
  width: 97%;
  flex: 1;
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

    const {
        favoriteVideoTagList,
        isLoading,
        errMessage } = useFavoriteTagList();

    if (!favoriteVideoTagList) {
        return (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    }

    if (isLoading) {
        return (
            <LoadingParent>
                <Loading />
            </LoadingParent>
        );
    }

    if (errMessage) {
        return (
            <Parent>
                {errMessage}
            </Parent>
        );
    }

    return (
        <Parent>
            {
                favoriteVideoTagList.length > 0 ?
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
                    `タグが設定されていません。`
            }
        </Parent>
    );
}