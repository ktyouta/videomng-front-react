import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import {
  HOME_SEARCH_AREA_PANEL_BORDER,
  HOME_WORD_AREA_DIVIDER_PADDING,
  HOME_WORD_AREA_SECTION_GAP,
} from "../../../../const/HomeConst";
import { HomeFavoriteKeywords } from "./HomeFavoriteKeywords";
import { HomeFrequentKeywords } from "./HomeFrequentKeywords";
import { HomeRecentKeywords } from "./HomeRecentKeywords";

// 検索バーと検索前ワードエリア最初のセクションとの間隔(スマホ)
const HOME_WORD_AREA_TOP_GAP_MOBILE = "35px";

// 検索バーと検索前ワードエリア最初のセクションとの間隔(タブレット/PC)
const HOME_WORD_AREA_TOP_GAP_DEFAULT = "80px";

// 検索バー（HomeSearchArea）の直下に付属する候補エリアのため、横幅の基準・余白を合わせる
const OuterDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 7%;
  margin-top: ${HOME_WORD_AREA_TOP_GAP_MOBILE};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    padding: 0 13%;
    margin-top: ${HOME_WORD_AREA_TOP_GAP_DEFAULT};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    padding: 0 13%;
    margin-top: ${HOME_WORD_AREA_TOP_GAP_DEFAULT};
  }

  @media (min-width: ${MEDIA.PC}) {
    padding: 0 13%;
    margin-top: ${HOME_WORD_AREA_TOP_GAP_DEFAULT};
  }
`;

const WordAreaDiv = styled.div`
  display:flex;
  flex-direction: column;
  gap: ${HOME_WORD_AREA_SECTION_GAP};
  box-sizing: border-box;

  & > *:not(:last-child) {
    padding-bottom: ${HOME_WORD_AREA_DIVIDER_PADDING};
    border-bottom: 1px solid ${HOME_SEARCH_AREA_PANEL_BORDER};
  }
`;

export function HomeVideoAreaDefault() {

  console.log("HomeVideoAreaDefault render");

  return (
    <OuterDiv>
      <WordAreaDiv>
        {/* 最近の検索 */}
        <HomeRecentKeywords />
        {/* あなたがよく検索するワード */}
        <HomeFrequentKeywords />
        {/* お気に入りワード */}
        <HomeFavoriteKeywords />
      </WordAreaDiv>
    </OuterDiv>
  );
}
