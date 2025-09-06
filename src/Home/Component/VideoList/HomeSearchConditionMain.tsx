import styled from "styled-components";
import ComboComponent, { comboType } from "../../../Common/Component/ComboComponent";
import { VIDEO_TYPE_LIST } from "../../Const/HomeConst";
import { useHomeSearchConditionMain } from "../../Hook/VideoList/useHomeSearchConditionMain";
import { VideoCategoryItemType } from "../../../Main/Type/VideoCategoryItemType";


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
  width: 55px;
  margin-right: 10px;
  white-space: normal;
  word-wrap: break-word;
`;


export function HomeSearchConditionMain() {

    console.log("HomeSearchConditionMain render");

    const {
        videoCategory,
        selectedVideoType,
        setSelectedVideoType,
        selectedVideoCategory,
        setSelectedVideoCategory, } = useHomeSearchConditionMain();

    return (
        <Parent>
            <ConditionAreaDiv>
                <InputDiv>
                    <InputLabel>
                        種別
                    </InputLabel>
                    <ComboComponent
                        combo={VIDEO_TYPE_LIST}
                        initValue={selectedVideoType ?? VIDEO_TYPE_LIST[0].value}
                        onChange={setSelectedVideoType}
                        width="68%"
                        minWidth="8%"
                        height="39px"
                    />
                </InputDiv>
                {
                    videoCategory && videoCategory.length > 0 &&
                    <InputDiv>
                        <InputLabel>
                            カテゴリ
                        </InputLabel>
                        <ComboComponent
                            combo={videoCategory}
                            initValue={selectedVideoCategory ?? videoCategory[0].value}
                            onChange={setSelectedVideoCategory}
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