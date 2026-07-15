import styled from "styled-components";
import { HeaderHowToUseHeader } from "./HeaderHowToUseHeader";
import { HeaderHowToUseMain } from "./HeaderHowToUseMain";
import { MEDIA } from "../../../../../consts/MediaConst";

const Parent = styled.div`
  box-sizing:border-box;
  padding-top:2%;
  height:100%;
  font-size: 13px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

export function HeaderHowToUse() {

  console.log("HeaderHowToUse render");

  return (
    <Parent>
      <HeaderHowToUseHeader />
      <HeaderHowToUseMain />
    </Parent>
  );
}