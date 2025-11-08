import styled from "styled-components";
import BaseTextbox from "../../../../Common/Component/BaseTextbox";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { ClearableTextbox } from "../../../../Common/Component/ClearableTextbox";
import { useHomeSearchKeywordCommentInput } from "../../../Hook/VideoDetail/VideoSearchKeywordComment/useHomeSearchKeywordCommentInput";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import React from "react";
import { TextboxWithButton } from "../../../../Common/Component/TextboxWithButton";


export function HomeSearchKeywordCommentInput() {

  console.log("HomeSearchKeywordCommentInput render");

  const {
    clickSearchBtn,
    clearInputKeyword,
    inputKeyword,
    setInputKeyword, } = useHomeSearchKeywordCommentInput();

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