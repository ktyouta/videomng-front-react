import styled from "styled-components";
import { IconComponent } from "../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import { MEDIA } from "../../../../../consts/MediaConst";
import { FAVORITE_VIDEO_DETAIL_FONT_SIZE } from "../consts/FavoriteVideoDetailFontSize";


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
  font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.SECTION_HEADING.MOBILE};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.SECTION_HEADING.PC};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.SECTION_HEADING.PC};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.SECTION_HEADING.PC};
  }
`;


export function FavoriteMemoHeader() {

  console.log("FavoriteMemoHeader render");

  return (
    <HeaderDiv>
      <HeaderTitleSpan>
        メモ
      </HeaderTitleSpan>
    </HeaderDiv>
  );
}