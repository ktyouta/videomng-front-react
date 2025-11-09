import React from "react";
import styled from "styled-components";
import { MEDIA } from "../../../../../consts/MediaConst";
import { HomeSearchConditionModal } from "./HomeSearchConditionModal";
import { HomeSearchText } from "./HomeSearchText";

const Parent = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 3%;
  padding-left: 4%;
  height: 36px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    height: 41px;
    padding-right: 12%;
    padding-left: 18%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    height: 41px;
    padding-right: 12%;
    padding-left: 18%;
  }

  @media (min-width: ${MEDIA.PC}) {
    height: 41px;
    padding-right: 12%;
    padding-left: 18%;
  }
`;

/**
 * 検索条件エリア
 */
export function HomeSearchArea() {

  console.log("HomeSearchArea render");

  return (
    <Parent>
      {/* テキスト入力 */}
      <HomeSearchText />
      {/* 検索条件モーダル */}
      <HomeSearchConditionModal />
    </Parent>
  );
}