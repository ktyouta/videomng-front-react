import React from "react";
import styled from "styled-components";
import { MEDIA } from "../consts/MediaConst";
import { TagMasterType } from "../types/videodetail/TagMasterType";
import ButtonComponent from "./ButtonComponent";
import { ClearableTextbox } from "./ClearableTextbox";
import { Option, Selectbox } from "./Selectbox";
import TagButtonComponent from "./TagButtonComponent";


const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  padding-top: 10px;
`;

const MainArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Parent = styled.div`
  flex:1;
  min-height: 0;
  width: 100%;
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 2%;
  color:white;
  display: flex;
  flex-direction: column;
`;

const TagMasterAreaDiv = styled.div`
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    gap: 30px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        margin-bottom: 30px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        margin-bottom: 30px;
    }

    @media (min-width: ${MEDIA.PC}) {
        margin-bottom: 30px;
        gap: 40px;
    }
`;

const TITLE_AREA_GAP = "4px";

const TitleAreaDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${TITLE_AREA_GAP};
`;

const TagMasterListTitleDiv = styled.div`
    box-sizing: border-box;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-bottom: 10px;

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
    flex: 1;
    min-height: 0;
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;
`;

const NoTagListTitleDiv = styled.div`
    margin-top: 1%;
    margin-left: 1%;
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

const FolderAreaDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
`;

const FilterInputAreaDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

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
    font-size: 16px;
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

const SELECTED_TAG_BORDER_COLOR = "#ff9f00";

type PropsType = {
    closeTagSelectModal: () => void;
    isMobile: boolean;
    isTablet: boolean;
    tagMasterList: TagMasterType[] | undefined;
    displayTagMaster: TagMasterType[];
    inputKeyword: string;
    setInputKeyword: (value: string) => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    filterTagMasterList: () => void;
    clearInput: () => void;
    folderOptions: Option[];
    selectedFolder: number | undefined;
    selectFolder: (id: number) => void;
    submitFavorite: () => void;
    selectedTagList: Map<number, TagMasterType>;
    onToggleTag: (tag: TagMasterType) => void;
}

export function TagFolderSelectPanel({
    closeTagSelectModal,
    isMobile,
    isTablet,
    tagMasterList,
    displayTagMaster,
    inputKeyword,
    setInputKeyword,
    handleKeyPress,
    filterTagMasterList,
    clearInput,
    folderOptions,
    selectedFolder,
    selectFolder,
    submitFavorite,
    selectedTagList,
    onToggleTag,
}: PropsType) {

    return (
        <Root>
            <MainArea>
                <Parent>
                    <TagMasterAreaDiv>
                        <TitleAreaDiv>
                            <TagMasterListTitleDiv>
                                お気に入り登録設定
                            </TagMasterListTitleDiv>
                            <TagEditAreaMessageSpan>
                                登録時にフォルダとタグを設定できます
                            </TagEditAreaMessageSpan>
                        </TitleAreaDiv>
                        <FolderAreaDiv>
                            <TitleSpan>
                                フォルダ：
                            </TitleSpan>
                            <Selectbox
                                options={folderOptions}
                                value={selectedFolder ? String(selectedFolder) : ""}
                                onChange={(value) => {
                                    selectFolder(Number(value));
                                }}
                                width={isMobile ? "55%" : "237px"}
                                height={isMobile ? "30px" : isTablet ? "32px" : "39px"}
                                indicatorPadding={isMobile ? "2px" : isTablet ? "6px" : undefined}
                                fontSize={isMobile ? "12px" : "15px"}
                                backgroundColor="rgb(24, 26, 30)"
                                color="white"
                                isSearchable={!isMobile}
                            />
                        </FolderAreaDiv>
                        {
                            tagMasterList && tagMasterList.length > 0
                                ?
                                <React.Fragment>
                                    <FilterInputAreaDiv>
                                        <TitleSpan>
                                            タグ検索：
                                        </TitleSpan>
                                        <ClearableTextbox
                                            height="100%"
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
                                                ...(isMobile ? { height: "28px" } : {}),
                                            }}
                                            backgroundColor="#ececec"
                                            clear={clearInput}
                                            onBlur={filterTagMasterList}
                                            onKeyDown={handleKeyPress}
                                        />
                                    </FilterInputAreaDiv>
                                    <TagMasterListAreaDiv>
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
                                                                        border: `${isMobile ? "2px" : "3px"}  solid ${isSelected ? SELECTED_TAG_BORDER_COLOR : (e.tagColor ?? "transparent")}`,
                                                                    }}
                                                                    onclick={() => {
                                                                        onToggleTag(e);
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
                                </React.Fragment>
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
