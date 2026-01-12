import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { FavoriteAddTagHeader } from "./FavoriteAddTagHeader";
import { FavoriteAddTagMain } from "./FavoriteAddTagMain";


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

export function FavoriteAddTag(props: propsType) {

  console.log("FavoriteAddTag render");

  return (
    <Parent>
      {/* タグ追加ヘッダ */}
      <FavoriteAddTagHeader
        close={props.close}
      />
      {/* タグ追加コンテンツ */}
      <FavoriteAddTagMain
        close={props.close}
      />
    </Parent>
  );
}