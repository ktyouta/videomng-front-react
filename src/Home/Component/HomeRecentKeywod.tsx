import React from "react";
import styled from "styled-components";
import { useHomeRecentKeywod } from "../Hook/useHomeRecentKeywod";
import { RxCross1 } from "react-icons/rx";
import { IconComponent } from "../../Common/Component/IconComponent";


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