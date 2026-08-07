import { FaFilter } from "react-icons/fa";
import styled from "styled-components";
import { LabeledFieldRow } from "../../../../../../components/LabeledFieldRow";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { MultiSelectbox } from "../../../../../../components/MultiSelectbox";
import { FAVORITE_LIST_MODE } from "../../../../const/FavoriteConst";
import { useFavoriteVideoFolderSearchConditionMain } from "../../../../hooks/videofolder/searcharea/filter/useFavoriteVideoFolderSearchConditionMain";


const ConditionAreaDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 6%;
  padding-right: 6%;
`;

const LABEL_WIDTH = "6.5em";
const ROW_MARGIN_BOTTOM = "8%";

const DefaultColorLink = styled.div`
    color: #7abaff;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    margin-bottom: clamp(23px,7%,47px);
`;

type propsType = {
  isOpen: boolean;
  close: () => void;
  isMobile: boolean;
}

export function FavoriteVideoFolderSearchCondition(props: propsType) {

  console.log("FavoriteVideoFolderSearchCondition render");

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
    clearFilter,
    folderList,
    changeFolder,
    selectedFavoriteVideoMode,
    selectedFavoriteVideoFolder, } = useFavoriteVideoFolderSearchConditionMain({ ...props });

  return (
    <ModalPortal
      isOpen={props.isOpen}
      modalWidth={isMobile ? "93%" : "45%"}
      modalMinHeight="70%"
      isCloseOuter={true}
      close={props.close}
      title="フィルター"
      titleIcon={FaFilter}
    >
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
    </ModalPortal>
  );
}