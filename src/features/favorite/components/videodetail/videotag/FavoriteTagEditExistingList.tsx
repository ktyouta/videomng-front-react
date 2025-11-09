import styled from "styled-components";
import React from "react";
import TagButtonComponent from "../../../../../components/TagButtonComponent";
import { tagType } from "../../../../../components/TagsComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { GoTriangleDown } from "react-icons/go";
import { IconComponent } from "../../../../../components/IconComponent";
import { GoTriangleRight } from "react-icons/go";
import { useFavoriteTagEditExistingList } from "../../../hooks/videodetail/videotag/useFavoriteTagEditExistingList";
import { ClearableTextbox } from "../../../../../components/ClearableTextbox";


const Parent = styled.div`
  flex:1;
  width: 100%;
  box-sizing: border-box;
  padding-left: 1%;
  padding-top: 2%;
  padding-right: 2%;
  color:white;
`;

const TagMasterAreaDiv = styled.div`
    margin-bottom: 30px
`;

const TagMasterListTitleDiv = styled.div`
    box-sizing: border-box;
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
    padding: 2% 1% 1% 0%;
    margin-bottom: 14px;
`;

const NoTagListTitleDiv = styled.div`
    margin-top: 3%;
    margin-left: 1%;
    margin-bottom: 30px;
`;

const TagEditAreaMessageSpan = styled.span`
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

const FilterInputAreaDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-right:3%;
  margin-bottom: 20px;
  width: 85%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 85%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 55%;
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 55%;
  }
`;

const TitleSpan = styled.span`
  margin-right:7px;
  color: white;
  font-size: 12px;
  white-space: nowrap;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

export function FavoriteTagEditExistingList() {

    console.log("FavoriteTagEditExistingList render");

    const {
        displayTagMaster,
        addTagEditList,
        isOpenTagMasterList,
        switchTagMasterList,
        inputKeyword,
        setInputKeyword,
        filterTagMasterList,
        clearInput,
        handleKeyPress,
        tagMasterList, } = useFavoriteTagEditExistingList();

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
                                    <FilterInputAreaDiv>
                                        <TitleSpan>
                                            タグ検索：
                                        </TitleSpan>
                                        <ClearableTextbox
                                            height="99%"
                                            textWidth="90%"
                                            placeholder=""
                                            value={inputKeyword}
                                            onChange={setInputKeyword}
                                            style={{
                                                borderRadius: 6,
                                                flex: 1,
                                            }}
                                            backgroundColor="#ececec"
                                            clear={clearInput}
                                            onBlur={filterTagMasterList}
                                            onKeyDown={handleKeyPress}
                                        />
                                    </FilterInputAreaDiv>
                                    {
                                        displayTagMaster && displayTagMaster.length > 0
                                            ?
                                            <React.Fragment>
                                                {
                                                    displayTagMaster.map((e: tagType) => {

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
                                            </React.Fragment>
                                            :
                                            <TagEditAreaMessageSpan>
                                                タグが存在しません。
                                            </TagEditAreaMessageSpan>
                                    }
                                </TagMasterListAreaDiv>
                                :
                                <NoTagListTitleDiv>
                                    <TagEditAreaMessageSpan>
                                        既存タグが存在しません。
                                    </TagEditAreaMessageSpan>
                                </NoTagListTitleDiv>
                        }
                    </React.Fragment>
                }
            </TagMasterAreaDiv>
        </Parent>
    );
}