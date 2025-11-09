import React from "react";
import styled from "styled-components";
import { useHomeRecentKeywords } from "../../../../hooks/videolist/videoarea/default/useHomeRecentKeywords";
import { RxCross1 } from "react-icons/rx";
import { IconComponent } from "../../../../../../components/IconComponent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { HomeHistoryWord } from "./HomeHistoryWord";


const Parent = styled.div`
  color:white;
  box-sizing: border-box;
  margin-top: 8%;
  padding-left: 23%;
  width: 90%;
  font-size: 13px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 15px;
    display:flex;
    align-items: center;
    margin-top: 3%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 17px;
    display:flex;
    align-items: center;
    margin-top: 3%;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 17px;
    display:flex;
    align-items: center;
    margin-top: 3%;
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
  box-sizing: border-box;
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


export function HomeRecentKeywords() {

  const {
    recentWordList,
    clickKeyWord,
    deleteKeyWord,
  } = useHomeRecentKeywords();

  return (
    <Parent>
      <TitleDiv>
        最近の検索：
      </TitleDiv>
      <WordAreaDiv>
        {
          recentWordList && recentWordList.length > 0 &&
          recentWordList.map((e) => {
            return (
              <HomeHistoryWord
                keyword={e}
                clickKeyword={clickKeyWord}
                deleteKeyword={deleteKeyWord}
                key={e}
              />
            )
          })
        }
      </WordAreaDiv>
    </Parent>
  );
}