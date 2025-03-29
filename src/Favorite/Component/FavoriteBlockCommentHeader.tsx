import styled from "styled-components";
import { IconComponent } from "../../Common/Component/IconComponent";
import { HiOutlineInbox } from 'react-icons/hi';
import { useFavoriteCommentHeader } from "../Hook/useFavoriteCommentHeader";
import ModalComponent from "../../Common/Component/ModalComponent";
import { FavoriteBlockComment } from "./FavoriteBlockComment";
import { RxCross1 } from "react-icons/rx";


//ヘッダータイトルのスタイル
const HeaderDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 1%;
  height:4%;
`;

const BlockIconDiv = styled.div`
  width: 4%;
  box-sizing: border-box;
  position:relative;
`;

const TitleSpan = styled.div`
  font-size:18px;
`;

const FlexSpaceDiv = styled.div`
  flex:1;
`;

type propsType = {
  close: () => void;
}


export function FavoriteBlockCommentHeader(props: propsType) {

  console.log("FavoriteBlockCommentHeader render");

  return (
    <HeaderDiv>
      <TitleSpan>
        非表示コメント
      </TitleSpan>
      <FlexSpaceDiv />
      <BlockIconDiv>
        <IconComponent
          icon={RxCross1}
          onclick={props.close}
          size="50%"
          style={{ color: "white" }}
        />
      </BlockIconDiv>
    </HeaderDiv>
  );
}