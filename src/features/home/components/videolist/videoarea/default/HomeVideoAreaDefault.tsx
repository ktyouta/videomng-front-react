import React from "react";
import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { HomeFavoriteKeywords } from "./HomeFavoriteKeywords";
import { HomeFrequentKeywords } from "./HomeFrequentKeywords";
import { HomeRecentKeywords } from "./HomeRecentKeywords";

const MessageDiv = styled.div`
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 70px;
  font-size: 15px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 15px;
    margin-top: 105px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 17px;
    margin-top: 105px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 17px;
    margin-top: 105px;
  }
`;

const WordAreaDiv = styled.div`
  color:white;
  display:flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-top: 57px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 15px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 17px;
    gap: 125px;
    margin-top: 95px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 17px;
    gap: 125px;
    margin-top: 95px;
  }
`;

export function HomeVideoAreaDefault() {

  console.log("HomeVideoAreaDefault render");

  return (
    <React.Fragment>
      <MessageDiv>
        キーワードを入力して動画を検索
      </MessageDiv>
      <WordAreaDiv>
        {/* 最近の検索 */}
        <HomeRecentKeywords />
        {/* あなたがよく検索するワード */}
        <HomeFrequentKeywords />
        {/* お気に入りワード */}
        <HomeFavoriteKeywords />
      </WordAreaDiv>
    </React.Fragment>
  );
}