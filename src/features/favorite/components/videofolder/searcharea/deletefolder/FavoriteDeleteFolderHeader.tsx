import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { FlexSpaceDiv } from "../../../../../../styles/styledcomponent/FlexSpaceDiv";
import { IconComponent } from "../../../../../../components/IconComponent";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
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

export function FavoriteDeleteFolderHeader(props: propsType) {

    console.log("FavoriteDeleteFolderHeader render");

    return (
        <Parent>
            <TitleSpan>
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