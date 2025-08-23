import styled from "styled-components";
import { IconComponent } from "../../../../../Common/Component/IconComponent";
import { RxCross1 } from "react-icons/rx";
import { FlexSpaceDiv } from "../../../../../Common/StyledComponent/FlexSpaceDiv";
import { MEDIA } from "../../../../../Common/Const/MediaConst";


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

const IconDiv = styled.div`
    position: relative;
    width: 15px;
    height: 15px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
        width: 22px;
        height: 22px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
        width: 22px;
        height: 22px;
    }

    @media (min-width: ${MEDIA.PC}) {
        width: 22px;
        height: 22px;
    }
`;

const TitleSpan = styled.div`
`;

type propsType = {
  close: () => void;
}


export function FavoriteFavoriteCommentHeader(props: propsType) {

  console.log("FavoriteFavoriteCommentHeader render");

  return (
    <HeaderDiv>
      <TitleSpan>
        お気に入りコメント
      </TitleSpan>
      <FlexSpaceDiv />
      <IconDiv>
        <IconComponent
          icon={RxCross1}
          onclick={props.close}
          size="100%"
          style={{ color: "white" }}
        />
      </IconDiv>
    </HeaderDiv>
  );
}