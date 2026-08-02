import styled from "styled-components";
import { Selectbox } from "../../../../components/Selectbox";
import { MEDIA } from "../../../../consts/MediaConst";
import { YouTubeDataApiVideoDetailItemType } from "../../../../types/youtube/YouTubeDataApiVideoDetailItemType";
import { MENU_NO, VIDEO_DETIAL_MENU_LIST } from "../../const/HomeConst";
import { useHomeVideoDetailMenu } from "../../hooks/videodetail/useHomeVideoDetailMenu";
import { HomeVideoDetailPanel } from "./HomeVideoDetailPanel";
import { HOME_VIDEO_DETAIL_FONT_SIZE } from "./consts/HomeVideoDetailFontSize";
import { HomeComment } from "./videocomment/HomeComment";
import { HomeMetaInfo } from "./videometainfo/HomeMetaInfo";
import { HomeSearchKeywordComment } from "./videosearchkeywordcomment/HomeSearchKeywordComment";


const MenuParentDiv = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top: 1%;
  margin-top: 2%;
  font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.MENU_BODY.MOBILE};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 75%;
    margin-left: 2%;
    margin-top: 0;
    padding-left: 3%;
    font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.MENU_BODY.PC};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 60%;
    margin-left: 2%;
    margin-top: 0;
    padding-left: 3%;
    font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.MENU_BODY.PC};
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 75%;
    margin-left: 2%;
    margin-top: 0;
    padding-left: 3%;
    font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.MENU_BODY.PC};
  }
`;

const ComboAreaDiv = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 4%;
  justify-content: center;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    justify-content: initial;
    margin-bottom: 3%;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    justify-content: initial;
    margin-bottom: 3%;
  }

  @media (min-width: ${MEDIA.PC}) {
    justify-content: initial;
    margin-bottom: 3%;
  }
`;

const ComboTitleSpan = styled.span`
  margin-right:2%;
  color: white;
  font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.MENU_LABEL.MOBILE};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.MENU_LABEL.PC};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.MENU_LABEL.PC};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${HOME_VIDEO_DETAIL_FONT_SIZE.MENU_LABEL.PC};
  }

`;

type propsType = {
  videoDetail: YouTubeDataApiVideoDetailItemType,
}


export function HomeVideoDetailMenu(props: propsType) {

  console.log("HomeVideoDetailMenu render");

  const {
    openMenuNo,
    setOpenMenuNo,
    videoId,
    isMobile,
  } = useHomeVideoDetailMenu();

  const videoDetail = props.videoDetail;
  const menuWidth = isMobile ? "96%" : "50%";
  const menuComboFontSize = isMobile ? "11px" : "13px";

  return (
    <MenuParentDiv>
      <ComboAreaDiv>
        {
          !isMobile &&
          <ComboTitleSpan>
            メニュー：
          </ComboTitleSpan>
        }
        <Selectbox
          options={VIDEO_DETIAL_MENU_LIST}
          value={openMenuNo || VIDEO_DETIAL_MENU_LIST[0].value}
          onChange={setOpenMenuNo}
          width={menuWidth}
          minWidth="8%"
          height="39px"
          backgroundColor="#3a3d42"
          borderColor="transparent"
          borderRadius="10px"
          color="white"
          fontSize={menuComboFontSize}
          isSearchable={!isMobile}
        />
      </ComboAreaDiv>
      {
        // 動画情報
        openMenuNo === MENU_NO.INFO &&
        <HomeVideoDetailPanel
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: isMobile ? "unset" : "505px",
            height: isMobile ? "655px" : "auto",
          }}
        >
          <HomeMetaInfo
            videoId={videoId}
            videoDetail={videoDetail}
          />
        </HomeVideoDetailPanel>
      }
      {
        // 公開コメント
        openMenuNo === MENU_NO.COMMENT &&
        <HomeVideoDetailPanel
          style={{
            display: "flex",
            flexDirection: "column",
            height: isMobile ? "655px" : "60vh",
          }}
        >
          <HomeComment />
        </HomeVideoDetailPanel>
      }
      {
        // キーワード検索(コメント)
        openMenuNo === MENU_NO.KEYWORD_SEARCH_COMMENT &&
        <HomeVideoDetailPanel
          style={{
            display: "flex",
            flexDirection: "column",
            height: isMobile ? "655px" : "60vh",
          }}
        >
          <HomeSearchKeywordComment />
        </HomeVideoDetailPanel>
      }
    </MenuParentDiv>
  );
}