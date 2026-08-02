import styled from "styled-components";
import BaseTextbox from "../../../../../components/BaseTextbox";
import { IconComponent } from "../../../../../components/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../../../hooks/videodetail/videomemo/useFavoriteMemoCreateInput";
import { useFavoriteSearchKeywordCommentInput } from "../../../hooks/videodetail/videosearchkeywordcomment/useFavoriteSearchKeywordCommentInput";
import { IoSearch } from "react-icons/io5";
import { ClearableTextbox } from "../../../../../components/ClearableTextbox";
import { MEDIA } from "../../../../../consts/MediaConst";
import React from "react";
import { TextboxWithButton } from "../../../../../components/TextboxWithButton";
import { mediaQuery, useMediaQuery } from "../../../../../hooks/useMediaQuery";

// テキストボックスの高さ（モバイル/それ以外）
const TEXTBOX_HEIGHT_MOBILE = "33px";
const TEXTBOX_HEIGHT_DEFAULT = "37px";

export function FavoriteSearchKeywordCommentInput() {

  console.log("FavoriteSearchKeywordCommentInput render");

  const {
    inputKeyword,
    setInputKeyword,
    clickSearchBtn,
    clearInputKeyword,
  } = useFavoriteSearchKeywordCommentInput();

  // 画面サイズ判定
  const isMobile = useMediaQuery(mediaQuery.mobile);

  return (
    <TextboxWithButton
      clear={clearInputKeyword}
      icon={IoSearch}
      onClick={clickSearchBtn}
      backgroundColor="#ececec"
      value={inputKeyword}
      onChange={setInputKeyword}
      placeholder="キーワード"
      outerWidth="96%"
      outerMobileWidth="96%"
      iconWidth="37px"
      iconMobileWidth="34px"
      outerHeight={isMobile ? TEXTBOX_HEIGHT_MOBILE : TEXTBOX_HEIGHT_DEFAULT}
      style={{
        marginRight: "auto",
        marginLeft: "auto",
      }}
    />
  );
}