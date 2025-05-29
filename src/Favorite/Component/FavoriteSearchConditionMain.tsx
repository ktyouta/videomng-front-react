import styled from "styled-components";
import ComboComponent, { comboType } from "../../Common/Component/ComboComponent";
import { VideoCategoryItemType } from "../../Main/Type/VideoCategoryItemType";
import { useFavoriteSearchConditionMain } from "../Hook/useFavoriteSearchConditionMain";


const Parent = styled.div`
    width: 100%;
    height: 96%;
    box-sizing: border-box;
    padding-left: 6%;
    color: white;
`;

const ConditionAreaDiv = styled.div`
  width: 97%;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 11%;
`;

const InputDiv = styled.div`
  display:flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 13%;
  box-sizing: border-box;
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 65px;
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
        viewStatusSelectList,
        selectedFavoriteVideoviewStatus,
        changeVideoCategory,
        changeViewStatus,
        tagMasterList,
        changeVideoTag,
        selectedFavoriteVideoTag,
        favoriteLevelList,
        selectedFavoriteVideoFavoriteLevel,
        changeFavoriteLevel, } = useFavoriteSearchConditionMain({ ...props });

    // カテゴリリスト
    const categoryComboList: comboType[] | undefined = videoCategory?.items.map((e: VideoCategoryItemType) => {

        const label = e.snippet.title;
        const value = e.id;

        return {
            label: label,
            value: value,
        }
    });

    return (
        <Parent>
            <ConditionAreaDiv>
                {
                    categoryComboList && categoryComboList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            カテゴリ
                        </InputLabel>
                        <ComboComponent
                            combo={categoryComboList}
                            initValue={selectedFavoriteVideoCategory ?? categoryComboList[0].value}
                            onChange={changeVideoCategory}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                        />
                    </InputDiv>
                }
                {
                    viewStatusSelectList && viewStatusSelectList.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            視聴状況
                        </InputLabel>
                        <ComboComponent
                            combo={viewStatusSelectList}
                            initValue={selectedFavoriteVideoviewStatus ?? viewStatusSelectList[0].value}
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