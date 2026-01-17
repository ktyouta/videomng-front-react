import styled from "styled-components";
import { MultiSelectbox } from "../../../../../../components/MultiSelectbox";
import { FAVORITE_LIST_MODE_FOLDER } from "../../../../const/FavoriteConst";
import { useFavoriteSearchConditionMain } from "../../../../hooks/videolist/searcharea/filter/useFavoriteSearchConditionMain";


const Parent = styled.div`
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

const InputDiv = styled.div`
  display:flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8%;
  box-sizing: border-box;
  width:100%;
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 17%;
  margin-right: 10px;
  white-space: normal;
  word-wrap: break-word;
`;

const DefaultColorLink = styled.div`
    color: #7abaff;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    margin-bottom: clamp(23px,7%,47px);
`;

type propsType = {
    close: () => void;
}

export function FavoriteSearchConditionMain(props: propsType) {

    console.log("FavoriteSearchConditionMain render");

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
            <ConditionAreaDiv>
                <DefaultColorLink
                    onClick={clearFilter}>
                    フィルター条件をクリア
                </DefaultColorLink>
                {
                    videoCategory && videoCategory.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            カテゴリ
                        </InputLabel>
                        <MultiSelectbox
                            options={videoCategory}
                            value={selectedFavoriteVideoCategory.split(`,`) ?? videoCategory[0].value}
                            onMenuClose={changeVideoCategory}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                            placeholder="すべて"
                        />
                    </InputDiv>
                }
                {
                    viewStatusList && viewStatusList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            視聴状況
                        </InputLabel>
                        <MultiSelectbox
                            options={viewStatusList}
                            value={selectedFavoriteVideoViewStatus.split(`,`) ?? viewStatusList[0].value}
                            onMenuClose={changeViewStatus}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                            placeholder="すべて"
                        />
                    </InputDiv>
                }
                {
                    tagMasterList && tagMasterList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            タグ
                        </InputLabel>
                        <MultiSelectbox
                            options={tagMasterList}
                            value={selectedFavoriteVideoTag.split(`,`) ?? tagMasterList[0].value}
                            onMenuClose={changeVideoTag}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                            placeholder="すべて"
                        />
                    </InputDiv>
                }
                {
                    favoriteLevelList &&
                    <InputDiv>
                        <InputLabel>
                            お気に入り度
                        </InputLabel>
                        <MultiSelectbox
                            options={favoriteLevelList}
                            value={selectedFavoriteVideoFavoriteLevel.split(`,`) ?? favoriteLevelList[0].value}
                            onMenuClose={changeFavoriteLevel}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                            placeholder="すべて"
                        />
                    </InputDiv>
                }
                {
                    selectedFavoriteVideoMode === FAVORITE_LIST_MODE_FOLDER && folderList && folderList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            フォルダ
                        </InputLabel>
                        <MultiSelectbox
                            options={folderList}
                            value={selectedFavoriteVideoFolder.split(`,`) ?? folderList[0].value}
                            onMenuClose={changeFolder}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                            placeholder="すべて"
                        />
                    </InputDiv>
                }
            </ConditionAreaDiv>
        </Parent>
    );
}