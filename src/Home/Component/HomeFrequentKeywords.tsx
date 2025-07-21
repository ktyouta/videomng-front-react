import React from "react";
import styled from "styled-components";
import { useHomeRecentKeywod } from "../Hook/useHomeRecentKeywod";
import { RxCross1 } from "react-icons/rx";
import { IconComponent } from "../../Common/Component/IconComponent";
import { useHomeFrequentKeywords } from "../Hook/useHomeFrequentKeywords";


const Parent = styled.div`
  color:white;
  box-sizing: border-box;
  margin-top: 3%;
  padding-left: 23%;
  display:flex;
  align-items: center;
  width: 75%;
  font-size: 17px;
`;

const TitleDiv = styled.div`
  display:flex;
  align-items: center;
  margin-right: 1%;
`;

const WordAreaDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
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
                            <WordDiv>
                                <WordSpan
                                    onClick={() => {
                                        clickKeyWord(e.keyword);
                                    }}
                                >
                                    {e.keyword}
                                </WordSpan>
                                <IconDiv>
                                    <IconComponent
                                        icon={RxCross1}
                                        size="60%"
                                        onclick={() => {
                                            deleteKeyWord(e.keyword)
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