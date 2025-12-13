import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { FlexSpaceDiv } from "../../../../../../styles/styledcomponent/FlexSpaceDiv";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
  margin-bottom: 4%;
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


export function FavoriteVideoFolderSearchConditionHeader(props: propsType) {

    console.log("FavoriteVideoFolderSearchConditionHeader render");

    return (
        <HeaderDiv>
            <TitleSpan>
                フィルター
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