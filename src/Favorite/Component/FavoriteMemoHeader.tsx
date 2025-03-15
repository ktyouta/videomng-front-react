import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  position:relative;
`;

const HeaderTitleSpan = styled.span`
  font-size:19px;
`;

type propsType = {
    closeModal: () => void
}

export function FavoriteMemoHeader(props: propsType) {

    console.log("FavoriteMemoHeader render");

    return (
        <HeaderDiv>
            <HeaderTitleSpan>
                メモ
            </HeaderTitleSpan>
            <IconComponent
                icon={RxCross1}
                onclick={props.closeModal}
                style={{
                    "text-align": "right",
                    "position": "absolute",
                    "right": "2%",
                }}
            />
        </HeaderDiv>
    );
}