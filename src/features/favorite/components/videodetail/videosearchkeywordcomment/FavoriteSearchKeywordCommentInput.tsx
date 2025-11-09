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


export function FavoriteSearchKeywordCommentInput() {

  console.log("FavoriteSearchKeywordCommentInput render");

  const {
    inputKeyword,
    setInputKeyword,
    clickSearchBtn,
    clearInputKeyword,
  } = useFavoriteSearchKeywordCommentInput();

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
      outerHeight="37px"
      style={{
        marginRight: "auto",
        marginLeft: "auto",
      }}
    />
  );
}