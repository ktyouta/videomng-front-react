import styled from "styled-components";
import { HeaderHowToUseHeader } from "./HeaderHowToUseHeader";
import { HeaderHowToUseMain } from "./HeaderHowToUseMain";
import { MEDIA } from "../../Common/Const/MediaConst";

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

    return (
        <Parent>
            <HeaderHowToUseHeader
                close={props.close}
            />
            <HeaderHowToUseMain />
        </Parent>
    );
}