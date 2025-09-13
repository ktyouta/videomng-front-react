import styled from "styled-components";
import ComboComponent, { comboType } from "../../../../../Common/Component/ComboComponent";
import { VideoCategoryItemType } from "../../../../../Main/Type/VideoCategoryItemType";
import { useFavoriteSearchConditionMain } from "../../../../Hook/VideoList/SearchArea/Filter/useFavoriteSearchConditionMain";


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
  padding-top: 3%;
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
        changeFavoriteLevel, } = useFavoriteSearchConditionMain({ ...props });


    return (
        <Parent>
            <ConditionAreaDiv>
                {
                    videoCategory && videoCategory.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            カテゴリ
                        </InputLabel>
                        <ComboComponent
                            combo={videoCategory}
                            initValue={selectedFavoriteVideoCategory ?? videoCategory[0].value}
                            onChange={changeVideoCategory}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                        />
                    </InputDiv>
                }
                {
                    viewStatusList && viewStatusList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            視聴状況
                        </InputLabel>
                        <ComboComponent
                            combo={viewStatusList}
                            initValue={selectedFavoriteVideoViewStatus ?? viewStatusList[0].value}
                            onChange={changeViewStatus}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                        />
                    </InputDiv>
                }
                {
                    tagMasterList && tagMasterList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            タグ
                        </InputLabel>
                        <ComboComponent
                            combo={tagMasterList}
                            initValue={selectedFavoriteVideoTag ?? tagMasterList[0].value}
                            onChange={changeVideoTag}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                        />
                    </InputDiv>
                }
                {
                    favoriteLevelList && favoriteLevelList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            お気に入り度
                        </InputLabel>
                        <ComboComponent
                            combo={favoriteLevelList}
                            initValue={selectedFavoriteVideoFavoriteLevel ?? favoriteLevelList[0].value}
                            onChange={changeFavoriteLevel}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                        />
                    </InputDiv>
                }
            </ConditionAreaDiv>
        </Parent>
    );
}