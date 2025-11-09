import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IconComponent } from "../../../../../components/IconComponent";
import { ClearableTextbox } from "../../../../../components/ClearableTextbox";
import { MEDIA } from "../../../../../consts/MediaConst";
import { useHomeSearchText } from "../../../hooks/videolist/searcharea/useHomeSearchText";
import { TextboxWithButton } from "../../../../../components/TextboxWithButton";
import React from "react";
import { IconBaseProps } from "react-icons";


/**
 * 検索条件テキストエリア
 */
export function HomeSearchText() {

  console.log("HomeSearchText render");

  const {
    clickSearchBtn,
    clearInput,
    inputKeyword,
    setInputKeyword, } = useHomeSearchText();

  return (
    <TextboxWithButton
      clear={clearInput}
      icon={IoSearch}
      onClick={clickSearchBtn}
      backgroundColor="#ececec"
      value={inputKeyword}
      onChange={setInputKeyword}
      placeholder="キーワード"
      outerWidth="75%"
      outerMobileWidth="72%"
      iconWidth="47px"
      iconMobileWidth="38px"
      outerHeight="99%"
      style={{
        marginRight: "3%"
      }}
    />
  );
}