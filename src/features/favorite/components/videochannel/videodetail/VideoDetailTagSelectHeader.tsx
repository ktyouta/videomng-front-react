import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  margin-bottom: 2%;
`;

const BlockIconDiv = styled.div`
  width: 4%;
  box-sizing: border-box;
  position: relative;
`;

const TitleSpan = styled.div`
  font-weight: bold;
`;

type propsType = {
    close: () => void;
}

export function VideoDetailTagSelectHeader(props: propsType) {

    return (
        <Parent>
            <TitleSpan>
                タグを設定
            </TitleSpan>
            <FlexSpaceDiv />
            <BlockIconDiv>
                <IconComponent
                    icon={RxCross1}
                    onclick={props.close}
                    size="90%"
                    style={{ color: "white" }}
                />
            </BlockIconDiv>
        </Parent>
    );
}
