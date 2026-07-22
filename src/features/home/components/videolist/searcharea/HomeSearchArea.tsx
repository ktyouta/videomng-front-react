import styled from "styled-components";
import { MEDIA } from "../../../../../consts/MediaConst";
import {
  HOME_SEARCH_AREA_PANEL_BG,
  HOME_SEARCH_AREA_PANEL_BORDER,
  HOME_SEARCH_AREA_PANEL_SHADOW,
} from "../../../const/HomeConst";
import { useHomeSearchArea } from "../../../hooks/videolist/searcharea/useHomeSearchArea";
import { HomeSearchConditionModal } from "./HomeSearchConditionModal";
import { HomeSearchText } from "./HomeSearchText";

const OuterDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 5%;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    padding: 0 13%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    padding: 0 13%;
  }

  @media (min-width: ${MEDIA.PC}) {
    padding: 0 13%;
  }
`;

const CardDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 12px;
  background-color: ${HOME_SEARCH_AREA_PANEL_BG};
  border: 1px solid ${HOME_SEARCH_AREA_PANEL_BORDER};
  box-shadow: ${HOME_SEARCH_AREA_PANEL_SHADOW};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    padding: 20px 18px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    padding: 20px 18px;
  }

  @media (min-width: ${MEDIA.PC}) {
    padding: 20px 18px;
  }
`;

/**
 * 検索条件エリア
 */
export function HomeSearchArea() {

  console.log("HomeSearchArea render");

  useHomeSearchArea();

  return (
    <OuterDiv>
      <CardDiv>
        {/* テキスト入力 */}
        <HomeSearchText />
        {/* 検索条件モーダル */}
        <HomeSearchConditionModal />
      </CardDiv>
    </OuterDiv>
  );
}