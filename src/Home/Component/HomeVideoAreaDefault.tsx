import React from "react";
import { HomeRecentKeywod } from "./HomeRecentKeywod";
import { HomeFrequentKeywords } from "./HomeFrequentKeywords";
import { HomeFavoriteKeywords } from "./HomeFavoriteKeywords";
import styled from "styled-components";
import { MEDIA } from "../../Common/Const/MediaConst";

const MessageDiv = styled.div`
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 11%;
  font-size: 13px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 15px;
    margin-top: 5%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 17px;
    margin-top: 5%;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 17px;
    margin-top: 5%;
  }
`;

export function HomeVideoAreaDefault() {

  return (
    <React.Fragment>
      <MessageDiv>
        キーワードを入力して動画を検索
      </MessageDiv>
      {/* 最近の検索 */}
      <HomeRecentKeywod />
      {/* あなたがよく検索するワード */}
      <HomeFrequentKeywords />
      {/* お気に入りワード */}
      <HomeFavoriteKeywords />
    </React.Fragment>
  );
}