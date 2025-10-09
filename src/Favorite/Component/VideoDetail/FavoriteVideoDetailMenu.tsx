import React from "react";
import { useFavoriteVideoDetail } from "../../Hook/VideoDetail/useFavoriteVideoDetail";
import LoadingBase from "../../../Common/Component/LoadingBase";
import styled from "styled-components";
import ButtonComponent from "../../../Common/Component/ButtonComponent";
import { FavoriteVideoDetailInfo } from "./FavoriteVideoDetailInfo";
import { YouTubeDataApiVideoDetailItemType } from "../../Type/VideoDetail/YouTubeDataApiVideoDetailItemType";
import { useFavoriteVideoDetailMenu } from "../../Hook/VideoDetail/useFavoriteVideoDetailMenu";
import { FavoriteVideoDetailDataType } from "../../Type/VideoDetail/FavoriteVideoDetailDataType";
import { FavoriteMemo } from "./VideoMemo/FavoriteMemo";
import { Z_INDEX_PARAM } from "../../../Common/Const/CommonConst";
import { MENU_NO, VIDEO_DETIAL_MENU_LIST } from "../../Const/FavoriteConst";
import { FavoriteComment } from "./VideoComment/FavoriteComment";
import { FavoriteSearchKeywordComment } from "./VideoSearchKeywordComment/FavoriteSearchKeywordComment";
import ComboComponent, { comboType } from "../../../Common/Component/ComboComponent";
import { FavoriteMetaInfo } from "./VideoMetaInfo/FavoriteMetaInfo";
import { FavoriteDetailSetting } from "./VideoDetailSetting/FavoriteDetailSetting";
import { FavoriteTag } from "./VideoTag/FavoriteTag";
import { Provider } from "jotai";
import { MEDIA } from "../../../Common/Const/MediaConst";


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
          <ComboComponent
            combo={VIDEO_DETIAL_MENU_LIST}
            initValue={VIDEO_DETIAL_MENU_LIST[0].value}
            onChange={setOpenMenuNo}
            width={menuWidth}
            minWidth="8%"
            height="39px"
            selectStyle={{
              "backgroundColor": "rgb(24, 26, 30)",
              "color": "white",
              "fontSize": `${menuComboFontSize}`
            }}
          />
        </ComboAreaDiv>
        {
          // 動画情報
          openMenuNo === MENU_NO.INFO &&
          <FavoriteMetaInfo
            videoDetail={videoDetail}
          />
        }
        {
          // メモ
          openMenuNo === MENU_NO.MEMO &&
          <FavoriteMemo />
        }
        {
          // 公開コメント
          openMenuNo === MENU_NO.COMMENT &&
          <FavoriteComment />
        }
        {
          // キーワード検索(コメント)
          openMenuNo === MENU_NO.KEYWORD_SEARCH_COMMENT &&
          <FavoriteSearchKeywordComment />
        }
        {
          // 動画詳細設定
          openMenuNo === MENU_NO.VIDEO_DETAIL_SETTING &&
          <FavoriteDetailSetting
            videoDetail={videoDetail}
          />
        }
        {
          // タグ
          openMenuNo === MENU_NO.TAG &&
          <FavoriteTag />
        }
      </MenuParentDiv>
    </React.Fragment>
  );
}