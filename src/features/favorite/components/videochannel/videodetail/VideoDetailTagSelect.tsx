import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../../../../components/ButtonComponent";
import { ClearableTextbox } from "../../../../../components/ClearableTextbox";
import TagButtonComponent from "../../../../../components/TagButtonComponent";
import { tagType } from "../../../../../components/TagsComponent";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useVideoDetailTagSelect } from "../../../hooks/videochannel/videodetail/useVideoDetailTagSelect";
import { VideoDetailTagSelectAssignedList } from "./VideoDetailTagSelectAssignedList";
import { VideoDetailTagSelectHeader } from "./VideoDetailTagSelectHeader";


const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MainArea = styled.div`
  flex: 1;
  overflow: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

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

const FooterDiv = styled.div`
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1%;
`;

type PropsType = {
    closeTagSelectModal: () => void;
}

export function VideoDetailTagSelect({ closeTagSelectModal }: PropsType) {

    const {
        tagMasterList,
        handleKeyPress,
        clearInput,
        addTagEditList,
        deleteTagEditList,
        displayTagMaster,
        selectedTagList,
        isOpenTagMasterList,
        inputKeyword,
        setInputKeyword,
        filterTagMasterList,
        submitFavorite,
    } = useVideoDetailTagSelect();

    return (
        <Root>
            {/* タグ選択ヘッダ */}
            <VideoDetailTagSelectHeader
                close={closeTagSelectModal}
            />
            <MainArea>
                {/* 選択中のタグ */}
                <VideoDetailTagSelectAssignedList
                    selectedTagList={selectedTagList}
                    deleteTagEditList={deleteTagEditList}
                />
                <Parent>
                    <TagMasterAreaDiv>
                        <TagMasterListTitleDiv>
                            既存タグから設定
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
                                                                        tagColor={e.tagColor}
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
            </MainArea>
            <FooterDiv>
                <ButtonComponent
                    shape="rounded"
                    onClick={closeTagSelectModal}
                    style={{
                        background: "#3a3d42",
                        color: "white"
                    }}
                >
                    キャンセル
                </ButtonComponent>
                <ButtonComponent
                    shape="rounded"
                    onClick={submitFavorite}
                    style={{
                        marginLeft: "5%",
                        color: "white",
                        background: "#3a3d42",
                    }}
                >
                    登録
                </ButtonComponent>
            </FooterDiv>
        </Root>
    );
}
