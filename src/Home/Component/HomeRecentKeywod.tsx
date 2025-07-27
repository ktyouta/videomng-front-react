import React from "react";
import styled from "styled-components";
import { useHomeRecentKeywod } from "../Hook/useHomeRecentKeywod";
import { RxCross1 } from "react-icons/rx";
import { IconComponent } from "../../Common/Component/IconComponent";
import { MEDIA } from "../../Common/Const/MediaConst";
import { HomeHistoryWord } from "./HomeHistoryWord";


const Parent = styled.div`
  color:white;
  box-sizing: border-box;
  margin-top: 3%;
  padding-left: 23%;
  width: 75%;
  font-size: 12px;

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

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    display:flex;
    align-items: center;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    display:flex;
    align-items: center;
  }

  @media (min-width: ${MEDIA.PC}) {
    display:flex;
    align-items: center;
  }

`;


export function HomeRecentKeywod() {

  const {
    recentWordList,
    clickKeyWord,
    deleteKeyWord,
  } = useHomeRecentKeywod();

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
              />
            )
          })
        }
      </WordAreaDiv>
    </Parent>
  );
}