import styled from "styled-components";
import { LabeledFieldRow } from "../../../../../../components/LabeledFieldRow";
import { MultiSelectbox } from "../../../../../../components/MultiSelectbox";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { FAVORITE_LIST_MODE } from "../../../../const/FavoriteConst";
import { useFavoriteSearchConditionMain } from "../../../../hooks/videolist/searcharea/filter/useFavoriteSearchConditionMain";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
  font-size: 12px;

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

const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
  margin-bottom: 4%;
`;

const HeaderTitleSpan = styled.div`
`;

const MainContentDiv = styled.div`
    width: 100%;
    height: 87%;
    box-sizing: border-box;
    padding-left: 6%;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
`;

const ConditionAreaDiv = styled.div`
  width: 97%;
  height: 97%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 1%;
`;

const LABEL_WIDTH = "6.5em";
const ROW_MARGIN_BOTTOM = "8%";

const DefaultColorLink = styled.div`
    color: #7abaff;
    cursor: pointer;
    display: inline-block;
    &:hover {
        text-decoration: underline;
    }
    margin-bottom: clamp(23px,7%,47px);
`;

type propsType = {
  close: () => void;
  isMobile: boolean;
}

export function FavoriteSearchCondition(props: propsType) {

  console.log("FavoriteSearchCondition render");

  const { isMobile } = props;

  const {
    videoCategory,
    selectedFavoriteVideoCategory,
    viewStatusList,
    selectedFavoriteVideoViewStatus,
    changeVideoCategory,
    changeViewStatus,
    tagMasterList,
    changeVideoTag,
    selectedFavoriteVideoTag,
    favoriteLevelList,
    selectedFavoriteVideoFavoriteLevel,
    changeFavoriteLevel,
    selectedFavoriteVideoFolder,
    changeFolder,
    folderList,
    clearFilter,
    selectedFavoriteVideoMode, } = useFavoriteSearchConditionMain({ ...props });

  return (
    <Parent>
      {/* 検索条件指定ヘッダ */}
      <HeaderDiv>
        <HeaderTitleSpan>
          フィルター
        </HeaderTitleSpan>
      </HeaderDiv>
      {/* 検索条件指定コンテンツ */}
      <MainContentDiv>
        <ConditionAreaDiv>
          <DefaultColorLink
            onClick={clearFilter}>
            フィルター条件をクリア
          </DefaultColorLink>
          {
            videoCategory && videoCategory.length > 0 &&
            <LabeledFieldRow
              label="カテゴリ"
              isMobile={isMobile}
              labelStyle={{ width: LABEL_WIDTH }}
              outerStyle={{ marginBottom: ROW_MARGIN_BOTTOM }}
            >
              <MultiSelectbox
                options={videoCategory}
                value={selectedFavoriteVideoCategory.split(`,`) ?? videoCategory[0].value}
                onMenuClose={changeVideoCategory}
                width="auto"
                outerStyle={{ flex: 1, minWidth: 0 }}
                height={isMobile ? "30px" : "39px"}
                indicatorPadding={isMobile ? "2px" : undefined}
                fontSize={isMobile ? "12px" : undefined}
                placeholder="すべて"
              />
            </LabeledFieldRow>
          }
          {
            viewStatusList && viewStatusList.length > 0 &&
            <LabeledFieldRow
              label="視聴状況"
              isMobile={isMobile}
              labelStyle={{ width: LABEL_WIDTH }}
              outerStyle={{ marginBottom: ROW_MARGIN_BOTTOM }}
            >
              <MultiSelectbox
                options={viewStatusList}
                value={selectedFavoriteVideoViewStatus.split(`,`) ?? viewStatusList[0].value}
                onMenuClose={changeViewStatus}
                width="auto"
                outerStyle={{ flex: 1, minWidth: 0 }}
                height={isMobile ? "30px" : "39px"}
                indicatorPadding={isMobile ? "2px" : undefined}
                fontSize={isMobile ? "12px" : undefined}
                placeholder="すべて"
              />
            </LabeledFieldRow>
          }
          {
            tagMasterList && tagMasterList.length > 0 &&
            <LabeledFieldRow
              label="タグ"
              isMobile={isMobile}
              labelStyle={{ width: LABEL_WIDTH }}
              outerStyle={{ marginBottom: ROW_MARGIN_BOTTOM }}
            >
              <MultiSelectbox
                options={tagMasterList}
                value={selectedFavoriteVideoTag.split(`,`) ?? tagMasterList[0].value}
                onMenuClose={changeVideoTag}
                width="auto"
                outerStyle={{ flex: 1, minWidth: 0 }}
                height={isMobile ? "30px" : "39px"}
                indicatorPadding={isMobile ? "2px" : undefined}
                fontSize={isMobile ? "12px" : undefined}
                placeholder="すべて"
              />
            </LabeledFieldRow>
          }
          {
            favoriteLevelList &&
            <LabeledFieldRow
              label="お気に入り度"
              isMobile={isMobile}
              labelStyle={{ width: LABEL_WIDTH }}
              outerStyle={{ marginBottom: ROW_MARGIN_BOTTOM }}
            >
              <MultiSelectbox
                options={favoriteLevelList}
                value={selectedFavoriteVideoFavoriteLevel.split(`,`) ?? favoriteLevelList[0].value}
                onMenuClose={changeFavoriteLevel}
                width="auto"
                outerStyle={{ flex: 1, minWidth: 0 }}
                height={isMobile ? "30px" : "39px"}
                indicatorPadding={isMobile ? "2px" : undefined}
                fontSize={isMobile ? "12px" : undefined}
                placeholder="すべて"
              />
            </LabeledFieldRow>
          }
          {
            selectedFavoriteVideoMode === FAVORITE_LIST_MODE.folder.value && folderList && folderList.length > 0 &&
            <LabeledFieldRow
              label="フォルダ"
              isMobile={isMobile}
              labelStyle={{ width: LABEL_WIDTH }}
              outerStyle={{ marginBottom: ROW_MARGIN_BOTTOM }}
            >
              <MultiSelectbox
                options={folderList}
                value={selectedFavoriteVideoFolder.split(`,`) ?? folderList[0].value}
                onMenuClose={changeFolder}
                width="auto"
                outerStyle={{ flex: 1, minWidth: 0 }}
                height={isMobile ? "30px" : "39px"}
                indicatorPadding={isMobile ? "2px" : undefined}
                fontSize={isMobile ? "12px" : undefined}
                placeholder="すべて"
              />
            </LabeledFieldRow>
          }
        </ConditionAreaDiv>
      </MainContentDiv>
    </Parent>
  );
}