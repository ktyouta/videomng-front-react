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
    font-weight: bold;
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

const NoTagListTitleDiv = styled.div`
    margin-top: 3%;
    margin-left: 1%;
    font-size: 12px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        font-size: 15px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        font-size: 15px;
    }

    @media (min-width: ${MEDIA.PC}) {
        font-size: 15px;
    }
`;

export function FavoriteTagEditList() {

    console.log("FavoriteTagEditList render");

    const {
        favoriteVideoTagEditList,
        deleteTag,
        tagMasterList,
        addTagEditList, } = useFavoriteTagEditList();

    if (!favoriteVideoTagEditList) {
        return;
    }

    return (
        <Parent>
            <TagListTitleDiv>
                既存タグから設定
            </TagListTitleDiv>
            {
                tagMasterList && tagMasterList.length > 0
                    ?
                    <TagListAreaDiv>
                        {
                            tagMasterList.map((e: tagType) => {

                                const tagKey = e.label;

                                return (
                                    <TagButtonComponent
                                        title={e.label}
                                        btnStyle={{
                                            marginRight: "15px",
                                            marginBottom: "10px"
                                        }}
                                        onclick={() => {
                                            addTagEditList(e);
                                        }}
                                        key={tagKey}
                                    />
                                )
                            })
                        }
                    </TagListAreaDiv>
                    :
                    <NoTagListTitleDiv>
                        既存タグが存在しません。
                    </NoTagListTitleDiv>
            }
            <TagListTitleDiv>
                設定されているタグ
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
                    <NoTagListTitleDiv>
                        タグが設定されていません。
                    </NoTagListTitleDiv>
            }
        </Parent>
    );
}