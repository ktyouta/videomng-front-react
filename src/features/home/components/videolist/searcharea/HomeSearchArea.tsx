import styled from "styled-components";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useHomeSearchArea } from "../../../hooks/videolist/searcharea/useHomeSearchArea";
import { HomeSearchConditionModal } from "./HomeSearchConditionModal";
import { HomeSearchText } from "./HomeSearchText";

const Parent = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 36px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    height: 41px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    height: 41px;
  }

  @media (min-width: ${MEDIA.PC}) {
    height: 41px;
  }
`;

/**
 * 検索条件エリア
 */
export function HomeSearchArea() {

  console.log("HomeSearchArea render");

  useHomeSearchArea();

  return (
    <Parent>
      {/* テキスト入力 */}
      <HomeSearchText />
      {/* 検索条件モーダル */}
      <HomeSearchConditionModal />
    </Parent>
  );
}