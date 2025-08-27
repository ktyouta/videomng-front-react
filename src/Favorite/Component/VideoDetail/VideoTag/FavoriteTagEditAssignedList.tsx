import styled from "styled-components";
import React from "react";
import TagButtonComponent from "../../../../Common/Component/TagButtonComponent";
import { tagType } from "../../../../Common/Component/TagsComponent";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import { useFavoriteTagEditAssignedList } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTagEditAssignedList";


const TagEditAreaDiv = styled.div`
    border-top: 1px solid;
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

const TagListAreaDiv = styled.div`
    width: 97%;
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 2% 1% 1% 1%;
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


export function FavoriteTagEditAssignedList() {

    console.log("FavoriteTagEditAssignedList render");

    const {
        deleteTag,
        favoriteVideoTagEditList } = useFavoriteTagEditAssignedList();

    return (
        <TagEditAreaDiv>
            <TagListTitleDiv>
                設定されているタグ
            </TagListTitleDiv>
            {
                favoriteVideoTagEditList &&
                <React.Fragment>
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
                </React.Fragment>
            }
        </TagEditAreaDiv>
    );
}