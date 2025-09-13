import styled from "styled-components";
import { HeaderHowToUseHeader } from "../HowToUse/HeaderHowToUseHeader";
import { HeaderHowToUseMain } from "../HowToUse/HeaderHowToUseMain";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import { HeaderUsagePrecautionHeader } from "./HeaderUsagePrecautionHeader";
import { HeaderUsagePrecautionMain } from "./HeaderUsagePrecautionMain";

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

type propsType = {
  close: () => void;
}

export function HeaderUsagePrecaution(props: propsType) {

  console.log("HeaderUsagePrecaution render");

  return (
    <Parent>
      <HeaderUsagePrecautionHeader
        close={props.close}
      />
      <HeaderUsagePrecautionMain />
    </Parent>
  );
}