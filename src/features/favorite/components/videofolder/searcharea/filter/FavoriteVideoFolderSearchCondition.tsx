import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { FavoriteVideoFolderSearchConditionHeader } from "./FavoriteVideoFolderSearchConditionHeader";
import { FavoriteVideoFolderSearchConditionMain } from "./FavoriteVideoFolderSearchConditionMain";


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

export function FavoriteVideoFolderSearchCondition(props: propsType) {

  console.log("FavoriteVideoFolderSearchCondition render");

  return (
    <Parent>
      {/* 検索条件指定ヘッダ */}
      <FavoriteVideoFolderSearchConditionHeader
        close={props.close}
      />
      {/* 検索条件指定コンテンツ */}
      <FavoriteVideoFolderSearchConditionMain
        close={props.close}
      />
    </Parent>
  );
}