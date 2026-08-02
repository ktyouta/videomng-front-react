import styled from "styled-components";
import { Selectbox } from "../../../../../components/Selectbox";
import { MEDIA } from "../../../../../consts/MediaConst";
import { VideoDetailItemType } from "../../../../../types/videodetail/VideoDetailItemType";
import { MENU_NO, NON_FAVORITE_VIDEO_DETAIL_MENU_LIST } from "../../../const/FavoriteConst";
import { useVideoDetailMenu } from "../../../hooks/videochannel/videodetail/useVideoDetailMenu";
import { Comment } from "./comment/Comment";
import { MetaInfo } from "./metainfo/MetaInfo";
import { SearchKeywordComment } from "./searchkeywordcomment/SearchKeywordComment";
import { VideoDetailPanel } from "./VideoDetailPanel";
import { VIDEO_DETAIL_FONT_SIZE } from "./consts/VideoDetailFontSize";


const MenuParentDiv = styled.div`
  width: 100%;
  box-sizing:border-box;
  padding-top: 1%;
  margin-top: 8%;
  font-size: ${VIDEO_DETAIL_FONT_SIZE.MENU_BODY.MOBILE};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 75%;
    margin-left: 2%;
    margin-top: 0;
    padding-left: 3%;
    font-size: ${VIDEO_DETAIL_FONT_SIZE.MENU_BODY.PC};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 60%;
    margin-left: 2%;
    margin-top: 0;
    padding-left: 3%;
    font-size: ${VIDEO_DETAIL_FONT_SIZE.MENU_BODY.PC};
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 75%;
    margin-left: 2%;
    margin-top: 0;
    padding-left: 3%;
    font-size: ${VIDEO_DETAIL_FONT_SIZE.MENU_BODY.PC};
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
  font-size: ${VIDEO_DETAIL_FONT_SIZE.MENU_LABEL.MOBILE};

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: ${VIDEO_DETAIL_FONT_SIZE.MENU_LABEL.PC};
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: ${VIDEO_DETAIL_FONT_SIZE.MENU_LABEL.PC};
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: ${VIDEO_DETAIL_FONT_SIZE.MENU_LABEL.PC};
  }

`;

type propsType = {
  videoDetail: VideoDetailItemType,
}


export function VideoDetailMenu(props: propsType) {

  console.log("VideoDetailMenu render");

  const {
    openMenuNo,
    setOpenMenuNo,
    videoId,
    isMobile,
  } = useVideoDetailMenu();

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
          options={NON_FAVORITE_VIDEO_DETAIL_MENU_LIST}
          value={openMenuNo || NON_FAVORITE_VIDEO_DETAIL_MENU_LIST[0].value}
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
        <VideoDetailPanel
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: isMobile ? "unset" : "505px",
            height: isMobile ? "655px" : "auto",
          }}
        >
          <MetaInfo
            videoId={videoId}
            videoDetail={videoDetail}
          />
        </VideoDetailPanel>
      }
      {
        // 公開コメント
        openMenuNo === MENU_NO.COMMENT &&
        <VideoDetailPanel
          style={{
            display: "flex",
            flexDirection: "column",
            height: isMobile ? "655px" : "60vh",
          }}
        >
          <Comment />
        </VideoDetailPanel>
      }
      {
        // キーワード検索(コメント)
        openMenuNo === MENU_NO.KEYWORD_SEARCH_COMMENT &&
        <VideoDetailPanel
          style={{
            display: "flex",
            flexDirection: "column",
            height: isMobile ? "655px" : "60vh",
          }}
        >
          <SearchKeywordComment />
        </VideoDetailPanel>
      }
    </MenuParentDiv>
  );
}