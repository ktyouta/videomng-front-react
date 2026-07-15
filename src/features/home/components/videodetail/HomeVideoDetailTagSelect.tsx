import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../../../components/ButtonComponent";
import { ClearableTextbox } from "../../../../components/ClearableTextbox";
import TagButtonComponent from "../../../../components/TagButtonComponent";
import { MEDIA } from "../../../../consts/MediaConst";
import { useHomeVideoDetailTagSelect } from "../../hooks/videodetail/useHomeVideoDetailTagSelect";
import { TagMasterType } from "../../types/videodetail/TagMasterType";


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
  padding-right: 2%;
  color:white;
`;

const TagMasterAreaDiv = styled.div`
    margin-bottom: 16px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        margin-bottom: 30px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        margin-bottom: 30px;
    }

    @media (min-width: ${MEDIA.PC}) {
        margin-bottom: 30px;
    }
`;

const TagMasterListTitleDiv = styled.div`
    box-sizing: border-box;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-bottom: 20px;

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
    max-height: 45vh;
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 2% 1% 1% 0%;
    margin-bottom: 14px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        max-height: 50vh;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        max-height: 50vh;
    }

    @media (min-width: ${MEDIA.PC}) {
        max-height: 50vh;
    }
`;

const NoTagListTitleDiv = styled.div`
    margin-top: 3%;
    margin-left: 1%;
    margin-bottom: 16px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        margin-bottom: 30px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        margin-bottom: 30px;
    }

    @media (min-width: ${MEDIA.PC}) {
        margin-bottom: 30px;
    }
`;

const TagEditAreaMessageSpan = styled.span`
    font-size: 11px;

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
  margin-bottom: 22px;
  width: 100%;

  @media (min-width: ${MEDIA.TABLET}) {
    margin-bottom: 20px;
  }

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
  font-size: 11px;
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
    height: 40px;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1%;

    @media (min-width: ${MEDIA.TABLET}) {
        height: 45px;
    }
`;

type PropsType = {
    closeTagSelectModal: () => void;
}

export function HomeVideoDetailTagSelect({ closeTagSelectModal }: PropsType) {

    console.log("HomeVideoDetailTagSelect render");

    const {
        tagMasterList,
        handleKeyPress,
        clearInput,
        toggleTagEditList,
        displayTagMaster,
        inputKeyword,
        setInputKeyword,
        filterTagMasterList,
        submitFavorite,
        isMobile,
        selectedTagList,
    } = useHomeVideoDetailTagSelect();

    return (
        <Root>
            <MainArea>
                <Parent>
                    <TagMasterAreaDiv>
                        <TagMasterListTitleDiv>
                            タグを選択
                        </TagMasterListTitleDiv>
                        {
                            tagMasterList && tagMasterList.length > 0
                                ?
                                <TagMasterListAreaDiv>
                                    <FilterInputAreaDiv>
                                        <TitleSpan>
                                            タグ検索：
                                        </TitleSpan>
                                        <ClearableTextbox
                                            height={isMobile ? "28px" : "34px"}
                                            textWidth="90%"
                                            placeholder=""
                                            value={inputKeyword}
                                            onChange={setInputKeyword}
                                            style={{
                                                borderRadius: 6,
                                                flex: 1,
                                            }}
                                            textboxStyle={{
                                                fontSize: "16px",
                                                height: isMobile ? "28px" : "34px",
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
                                                    displayTagMaster.map((e: TagMasterType) => {

                                                        const tagId = e.tagId;
                                                        const isSelected = selectedTagList.has(e.tagId);

                                                        return (
                                                            <TagButtonComponent
                                                                title={e.tagName}
                                                                btnStyle={{
                                                                    marginRight: isMobile ? "10px" : "15px",
                                                                    marginBottom: isMobile ? "6px" : "10px",
                                                                    ...(isMobile ? { padding: "3px 8px", minWidth: "auto" } : {}),
                                                                    border: `2px solid ${isSelected ? "#ff9f00" : (e.tagColor ?? "transparent")}`,
                                                                }}
                                                                onclick={() => {
                                                                    toggleTagEditList(e);
                                                                }}
                                                                key={`${tagId}-tagmst`}
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
                    </TagMasterAreaDiv>
                </Parent>
            </MainArea>
            <FooterDiv>
                <ButtonComponent
                    shape="rounded"
                    size={isMobile ? "small" : "medium"}
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
                    size={isMobile ? "small" : "medium"}
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
