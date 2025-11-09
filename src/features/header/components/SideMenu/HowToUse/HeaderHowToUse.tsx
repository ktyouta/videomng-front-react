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

type propsType = {
  close: () => void;
}

export function HeaderHowToUse(props: propsType) {

  console.log("HeaderHowToUse render");

  return (
    <Parent>
      <HeaderHowToUseHeader
        close={props.close}
      />
      <HeaderHowToUseMain />
    </Parent>
  );
}