import React from "react";
import styled from "styled-components";
import { useHomeRecentKeywod } from "../Hook/useHomeRecentKeywod";
import { RxCross1 } from "react-icons/rx";
import { IconComponent } from "../../Common/Component/IconComponent";
import { useHomeFrequentKeywords } from "../Hook/useHomeFrequentKeywords";
import { useHomeFavoriteKeywords } from "../Hook/useHomeFavoriteKeywords";
import { MEDIA } from "../../Common/Const/MediaConst";


const Parent = styled.div`
  color:white;
  box-sizing: border-box;
  margin-top: 5%;
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

const WordDiv = styled.div`
  display:flex;
  align-items: center;
`;

const WordSpan = styled.span`
    cursor:pointer;
    &:hover {
        color:#2563eb;
    }
`;

const IconDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:15px;
  margin-left:3px
`;

export function HomeFavoriteKeywords() {

    const {
        favoriteWordList,
        clickKeyWord,
        deleteKeyWord,
    } = useHomeFavoriteKeywords();

    return (
        <Parent>
            <TitleDiv>
                お気に入りワード：
            </TitleDiv>
            <WordAreaDiv>
                {
                    favoriteWordList && favoriteWordList.length > 0 &&
                    favoriteWordList.map((e) => {
                        return (
                            <WordDiv>
                                <WordSpan
                                    onClick={() => {
                                        clickKeyWord(e);
                                    }}
                                >
                                    {e}
                                </WordSpan>
                                <IconDiv>
                                    <IconComponent
                                        icon={RxCross1}
                                        size="60%"
                                        onclick={() => {
                                            deleteKeyWord(e)
                                        }}
                                    />
                                </IconDiv>
                            </WordDiv>
                        )
                    })
                }
            </WordAreaDiv>
        </Parent>
    );
}