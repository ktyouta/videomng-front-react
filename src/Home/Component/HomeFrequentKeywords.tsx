import React from "react";
import styled from "styled-components";
import { useHomeRecentKeywod } from "../Hook/useHomeRecentKeywod";
import { RxCross1 } from "react-icons/rx";
import { IconComponent } from "../../Common/Component/IconComponent";
import { useHomeFrequentKeywords } from "../Hook/useHomeFrequentKeywords";
import { MEDIA } from "../../Common/Const/MediaConst";
import { HomeHistoryWord } from "./HomeHistoryWord";


const Parent = styled.div`
  color:white;
  box-sizing: border-box;
  margin-top: 5%;
  padding-left: 23%;
  width: 90%;
  font-size: 13px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 15px;
    display:flex;
    align-items: center;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 17px;
    display:flex;
    align-items: center;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 17px;
    display:flex;
    align-items: center;
  }
`;

const TitleDiv = styled.div`
  display:flex;
  align-items: center;
  margin-right: 1%;
  white-space: nowrap;
`;

const WordAreaDiv = styled.div`
  flex-wrap: wrap;
  gap: 16px;
  padding-left: 2%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    display:flex;
    align-items: center;
    padding-left: 0;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    display:flex;
    align-items: center;
    padding-left: 0;
  }

  @media (min-width: ${MEDIA.PC}) {
    display:flex;
    align-items: center;
    padding-left: 0;
  }
`;


export function HomeFrequentKeywords() {

  const {
    frequentWordList,
    clickKeyWord,
    deleteKeyWord,
  } = useHomeFrequentKeywords();

  return (
    <Parent>
      <TitleDiv>
        あなたがよく検索するワード：
      </TitleDiv>
      <WordAreaDiv>
        {
          frequentWordList && frequentWordList.length > 0 &&
          frequentWordList.map((e) => {
            return (
              <HomeHistoryWord
                keyword={e.keyword}
                clickKeyword={clickKeyWord}
                deleteKeyword={deleteKeyWord}
              />
            )
          })
        }
      </WordAreaDiv>
    </Parent>
  );
}