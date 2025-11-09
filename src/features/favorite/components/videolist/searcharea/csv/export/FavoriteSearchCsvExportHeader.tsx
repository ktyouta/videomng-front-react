import styled from "styled-components";
import { IconComponent } from "../../../../../../../components/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { FlexSpaceDiv } from "../../../../../../../styles/styledcomponent/FlexSpaceDiv";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
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

export function FavoriteSearchCsvExportHeader(props: propsType) {

    console.log("FavoriteSearchCsvExportHeader render");

    return (
        <Parent>
            <TitleSpan>
                お気に入りの取込
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