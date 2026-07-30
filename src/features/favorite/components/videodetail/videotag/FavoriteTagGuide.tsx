import styled from "styled-components";
import { MEDIA } from "../../../../../consts/MediaConst";
import { FAVORITE_VIDEO_DETAIL_FONT_SIZE } from "../consts/FavoriteVideoDetailFontSize";


const Parent = styled.div`
  font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.TAG_GUIDE_BODY.MOBILE};
  line-height: 1.6;
  color: white;
  margin-top: 8px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.TAG_GUIDE_BODY.PC};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.TAG_GUIDE_BODY.PC};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.TAG_GUIDE_BODY.PC};
  }
`;

const GuideTitle = styled.h3`
  font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.TAG_GUIDE_TITLE.MOBILE};
  margin-bottom: 6px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.TAG_GUIDE_TITLE.PC};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.TAG_GUIDE_TITLE.PC};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${FAVORITE_VIDEO_DETAIL_FONT_SIZE.TAG_GUIDE_TITLE.PC};
  }
`;

const GuideList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
`;

const GuideItem = styled.li`
  margin-bottom: 6px;
`;

export function FavoriteTagGuide() {

  console.log("FavoriteTagGuide render");

  return (
    <Parent>
      <GuideTitle>
        タグの設定方法
      </GuideTitle>
      <GuideList>
        <GuideItem>
          「タグを追加」ボタンを押下するとモーダルが表示されます。
          <br />
          モーダル内でタグ名を入力して「追加」ボタンを押下するとタグが設定されます。
        </GuideItem>
        <GuideItem>
          既存タグから直接選択して設定することもできます。
        </GuideItem>
        <GuideItem>
          タグの設定後、チェックアイコンをクリックすると設定が確定されます。
        </GuideItem>
      </GuideList>
    </Parent>
  );
}