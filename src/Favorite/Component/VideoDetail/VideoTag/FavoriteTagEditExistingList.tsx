import styled from "styled-components";
import React from "react";
import TagButtonComponent from "../../../../Common/Component/TagButtonComponent";
import { tagType } from "../../../../Common/Component/TagsComponent";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import { GoTriangleDown } from "react-icons/go";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { GoTriangleRight } from "react-icons/go";
import { useFavoriteTagEditExistingList } from "../../../Hook/VideoDetail/VideoTag/useFavoriteTagEditExistingList";


const TagMasterAreaDiv = styled.div`
    margin-bottom: 30px
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

const OpenTagIconDiv = styled.div`
  width: 22px;
  height: 22px;
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


export function FavoriteTagEditExistingList() {

    console.log("FavoriteTagEditExistingList render");

    const {
        tagMasterList,
        addTagEditList,
        isOpenTagMasterList,
        switchTagMasterList, } = useFavoriteTagEditExistingList();

    return (
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
                tagMasterList && isOpenTagMasterList &&
                <React.Fragment>
                    {
                        tagMasterList.length > 0
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
    );
}