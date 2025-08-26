import styled from "styled-components";
import { useFavoriteMemoList } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoList";
import { FavoriteVideoMemoType } from "../../../Type/VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { FavoriteMemoContent } from "../VideoMemo/FavoriteMemoContent";
import LoadingBase from "../../../../Common/Component/LoadingBase";
import { useFavoriteTagList } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTagList";
import { FavoriteVideoTagType } from "../../../Type/VideoDetail/VideoTag/FavoriteVideoTagType";
import React from "react";
import TagButtonComponent from "../../../../Common/Component/TagButtonComponent";
import { useFavoriteTagEditList } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTagEditList";
import { tagType } from "../../../../Common/Component/TagsComponent";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import { GoTriangleDown } from "react-icons/go";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { GoTriangleRight } from "react-icons/go";

const Parent = styled.div`
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  padding-left: 2%;
  padding-top: 4%;
  padding-right: 2%;
  color:white;
`;

const TagMasterAreaDiv = styled.div`
    margin-bottom: 30px
`;

const TagEditAreaDiv = styled.div`
    border-top: 1px solid;
`;

const TagMasterListTitleDiv = styled.div`
    box-sizing: border-box;
    padding-left: 1%;
    font-weight: bold;
    display: flex;
    align-items: center;
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

const TagListTitleDiv = styled.div`
    box-sizing: border-box;
    padding-left: 1%;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-top: 10px;
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

const OpenTagIconDiv = styled.div`
  width: 22px;
  height: 22px;
`;

const TagListAreaDiv = styled.div`
    width: 97%;
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 2% 1% 1% 1%;
`;

const TagMasterListAreaDiv = styled.div`
    width: 97%;
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 2% 1% 1% 1%;
    margin-bottom: 14px;
`;

const NoTagListTitleDiv = styled.div`
    margin-top: 3%;
    margin-left: 1%;
    margin-bottom: 30px;
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
        deleteTag,
        tagMasterList,
        addTagEditList,
        isOpenTagMasterList,
        switchTagMasterList,
        favoriteVideoTagEditList } = useFavoriteTagEditList();

    if (!favoriteVideoTagEditList) {
        return <Parent />;
    }

    if (!tagMasterList) {
        return <Parent />;
    }

    return (
        <Parent>
            <TagMasterAreaDiv>
                <TagMasterListTitleDiv>
                    既存タグから設定
                    <OpenTagIconDiv>
                        <IconComponent
                            icon={isOpenTagMasterList ? GoTriangleDown : GoTriangleRight}
                            size="100%"
                            style={{ color: "white" }}
                            onclick={switchTagMasterList}
                        />
                    </OpenTagIconDiv>
                </TagMasterListTitleDiv>
                {
                    isOpenTagMasterList &&
                    <React.Fragment>
                        {
                            tagMasterList && tagMasterList.length > 0
                                ?
                                <TagMasterListAreaDiv>
                                    {
                                        tagMasterList.map((e: tagType) => {

                                            const tagKey = e.label;

                                            return (
                                                <TagButtonComponent
                                                    title={tagKey}
                                                    btnStyle={{
                                                        marginRight: "15px",
                                                        marginBottom: "10px"
                                                    }}
                                                    onclick={() => {
                                                        addTagEditList(e);
                                                    }}
                                                    key={`${tagKey}-tagmst`}
                                                />
                                            )
                                        })
                                    }
                                </TagMasterListAreaDiv>
                                :
                                <NoTagListTitleDiv>
                                    既存タグが存在しません。
                                </NoTagListTitleDiv>
                        }
                    </React.Fragment>
                }
            </TagMasterAreaDiv>
            <TagEditAreaDiv>
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
                                            key={`${tagKey}-tagedit`}
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
            </TagEditAreaDiv>
        </Parent>
    );
}