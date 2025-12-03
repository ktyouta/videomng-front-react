import React from "react";
import styled from "styled-components";
import { Selectbox } from "../../../../components/Selectbox";
import { MEDIA } from "../../../../consts/MediaConst";
import { MENU_NO, VIDEO_DETIAL_MENU_LIST } from "../../const/FavoriteConst";
import { useFavoriteVideoDetailMenu } from "../../hooks/videodetail/useFavoriteVideoDetailMenu";
import { FavoriteVideoDetailDataType } from "../../types/videodetail/FavoriteVideoDetailDataType";
import { FavoriteVideoDetailPanel } from "./FavoriteVideoDetailPanel";
import { FavoriteComment } from "./videocomment/FavoriteComment";
import { FavoriteDetailSetting } from "./videodetailsetting/FavoriteDetailSetting";
import { FavoriteMemo } from "./videomemo/FavoriteMemo";
import { FavoriteMetaInfo } from "./videometainfo/FavoriteMetaInfo";
import { FavoriteSearchKeywordComment } from "./videosearchkeywordcomment/FavoriteSearchKeywordComment";
import { FavoriteTag } from "./videotag/FavoriteTag";


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
  videoDetail: FavoriteVideoDetailDataType
}


export function FavoriteVideoDetailMenu(props: propsType) {

  console.log("FavoriteVideoDetailMenu render");

  const {
    openMenuNo,
    setOpenMenuNo,
    isMobile } = useFavoriteVideoDetailMenu();

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
          <FavoriteVideoDetailPanel
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: `505px`
            }}
          >
            <FavoriteMetaInfo
              videoDetail={videoDetail}
            />
          </FavoriteVideoDetailPanel>
        }
        {
          // メモ
          openMenuNo === MENU_NO.MEMO &&
          <FavoriteVideoDetailPanel
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FavoriteMemo />
          </FavoriteVideoDetailPanel>
        }
        {
          // 公開コメント
          openMenuNo === MENU_NO.COMMENT &&
          <FavoriteVideoDetailPanel
            style={{
              display: "flex",
              flexDirection: "column",
              height: "60vh",
            }}
          >
            <FavoriteComment />
          </FavoriteVideoDetailPanel>
        }
        {
          // キーワード検索(コメント)
          openMenuNo === MENU_NO.KEYWORD_SEARCH_COMMENT &&
          <FavoriteVideoDetailPanel
            style={{
              display: "flex",
              flexDirection: "column",
              height: "60vh",
            }}
          >
            <FavoriteSearchKeywordComment />
          </FavoriteVideoDetailPanel>
        }
        {
          // 動画詳細設定
          openMenuNo === MENU_NO.VIDEO_DETAIL_SETTING &&
          <FavoriteVideoDetailPanel
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FavoriteDetailSetting />
          </FavoriteVideoDetailPanel>
        }
        {
          // タグ
          openMenuNo === MENU_NO.TAG &&
          <FavoriteVideoDetailPanel
            style={{
              minHeight: "45vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FavoriteTag />
          </FavoriteVideoDetailPanel>
        }
      </MenuParentDiv>
    </React.Fragment>
  );
}