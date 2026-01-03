import React from "react";
import styled from "styled-components";
import { Selectbox } from "../../../../components/Selectbox";
import { MEDIA } from "../../../../consts/MediaConst";
import { YouTubeDataApiVideoDetailItemType } from "../../../../types/youtube/YouTubeDataApiVideoDetailItemType";
import { MENU_NO, VIDEO_DETIAL_MENU_LIST } from "../../const/HomeConst";
import { useHomeVideoDetailMenu } from "../../hooks/videodetail/useHomeVideoDetailMenu";
import { HomeVideoDetailPanel } from "./HomeVideoDetailPanel";
import { HomeComment } from "./videocomment/HomeComment";
import { HomeMetaInfo } from "./videometainfo/HomeMetaInfo";
import { HomeSearchKeywordComment } from "./videosearchkeywordcomment/HomeSearchKeywordComment";


const MenuParentDiv = styled.div`
  width: 99%;
  box-sizing:border-box;
  padding-top: 1%;
  margin-top: 8%;
  font-size: 14px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 75%;
    margin-left: 2%;
    margin-top: 0;
    padding-left: 3%;
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 75%;
    margin-left: 2%;
    margin-top: 0;
    padding-left: 3%;
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 75%;
    margin-left: 2%;
    margin-top: 0;
    padding-left: 3%;
    font-size: 16px;
  }
`;

const ComboAreaDiv = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 3%;
`;

const ComboTitleSpan = styled.span`
  margin-right:2%;
  color: white;
  font-size: 14px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 18px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 18px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 18px;
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
  const menuWidth = isMobile ? "75%" : "50%";
  const menuComboFontSize = isMobile ? "11px" : "13px";

  return (
    <React.Fragment>
      <MenuParentDiv>
        <ComboAreaDiv>
          <ComboTitleSpan>
            メニュー：
          </ComboTitleSpan>
          <Selectbox
            options={VIDEO_DETIAL_MENU_LIST}
            value={openMenuNo || VIDEO_DETIAL_MENU_LIST[0].value}
            onChange={setOpenMenuNo}
            width={menuWidth}
            minWidth="8%"
            height="39px"
            backgroundColor="rgb(24, 26, 30)"
            color="white"
            fontSize={menuComboFontSize}
          />
        </ComboAreaDiv>
        {
          // 動画情報
          openMenuNo === MENU_NO.INFO &&
          <HomeVideoDetailPanel
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: `505px`
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
              height: "505px",
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
              height: "505px",
            }}
          >
            <HomeSearchKeywordComment />
          </HomeVideoDetailPanel>
        }
      </MenuParentDiv>
    </React.Fragment>
  );
}