import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { FlexSpaceDiv } from "../../../../../styles/styledcomponent/FlexSpaceDiv";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
  margin-bottom:6%;
`;

const BlockIconDiv = styled.div`
  width: 4%;
  box-sizing: border-box;
  position:relative;
`;

const TitleSpan = styled.div`
`;

type propsType = {
    close: () => void;
}


export function HeaderUsagePrecautionHeader(props: propsType) {

    console.log("HeaderUsagePrecautionHeader render");

    return (
        <HeaderDiv>
            <TitleSpan>
                使用上の注意
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
        </HeaderDiv>
    );
}