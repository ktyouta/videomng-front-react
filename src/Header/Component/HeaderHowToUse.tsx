import styled from "styled-components";
import { HeaderHowToUseHeader } from "./HeaderHowToUseHeader";
import { HeaderHowToUseMain } from "./HeaderHowToUseMain";

const Parent = styled.div`
  box-sizing:border-box;
  padding-top:2%;
  height:100%;
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