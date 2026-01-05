import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { FavoriteFavoriteCommentHeader } from "./FavoriteFavoriteCommentHeader";
import { FavoriteFavoriteCommentList } from "./FavoriteFavoriteCommentList";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

type propsType = {
  close: () => void;
}

export function FavoriteFavoriteComment(props: propsType) {

  console.log("FavoriteFavoriteComment render");

  return (
    <Parent>
      {/* お気に入りコメントヘッダ */}
      <FavoriteFavoriteCommentHeader
        close={props.close}
      />
      {/* お気に入りコメントリスト */}
      <FavoriteFavoriteCommentList />
    </Parent>
  );
}