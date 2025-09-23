import styled from "styled-components";
import { IconComponent } from "../../../../../../Common/Component/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { FlexSpaceDiv } from "../../../../../../Common/StyledComponent/FlexSpaceDiv";


const Parent = styled.div<{ height: string }>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:${({ height }) => (height)};
  margin-bottom:7%;
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
    height: string
}

export function FavoriteSearchCsvImportHeader(props: propsType) {

    console.log("FavoriteSearchCsvImportHeader render");

    return (
        <Parent
            height={props.height}
        >
            <TitleSpan>
                お気に入りのインポート
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