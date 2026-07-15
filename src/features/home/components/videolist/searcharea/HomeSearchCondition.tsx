import styled from "styled-components";
import { Selectbox } from "../../../../../components/Selectbox";
import { VIDEO_TYPE_LIST } from "../../../const/HomeConst";
import { useHomeSearchConditionMain } from "../../../hooks/videolist/searcharea/useHomeSearchConditionMain";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
`;

const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
`;

const HeaderTitleSpan = styled.div`
  font-size:14px;
`;

const MainContentDiv = styled.div`
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
  width: 17%;
  margin-right: 10px;
  white-space: normal;
  word-wrap: break-word;
`;

export function HomeSearchCondition() {

    console.log("HomeSearchCondition render");

    const {
        selectVideoCategory,
        selectedVideoType,
        setSelectedVideoType,
        selectedVideoCategory,
        setSelectedVideoCategory, } = useHomeSearchConditionMain();

    return (
        <Parent>
            {/* 検索条件指定ヘッダ */}
            <HeaderDiv>
                <HeaderTitleSpan>
                    条件を指定
                </HeaderTitleSpan>
            </HeaderDiv>
            {/* 検索条件指定コンテンツ */}
            <MainContentDiv>
                <ConditionAreaDiv>
                    <InputDiv>
                        <InputLabel>
                            種別
                        </InputLabel>
                        <Selectbox
                            options={VIDEO_TYPE_LIST}
                            value={selectedVideoType || VIDEO_TYPE_LIST[0].value}
                            onChange={setSelectedVideoType}
                            width="68%"
                            minWidth="8%"
                            height="39px"
                        />
                    </InputDiv>
                    {
                        selectVideoCategory && selectVideoCategory.length > 0 &&
                        <InputDiv>
                            <InputLabel>
                                カテゴリ
                            </InputLabel>
                            <Selectbox
                                options={selectVideoCategory}
                                value={selectedVideoCategory || selectVideoCategory[0].value}
                                onChange={setSelectedVideoCategory}
                                width="68%"
                                minWidth="8%"
                                height="39px"
                            />
                        </InputDiv>
                    }
                </ConditionAreaDiv>
            </MainContentDiv>
        </Parent>
    );
}