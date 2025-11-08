import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { ClearableTextbox } from "../../../../Common/Component/ClearableTextbox";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import { useHomeSearchText } from "../../../Hook/VideoList/SearchArea/useHomeSearchText";
import { TextboxWithButton } from "../../../../Common/Component/TextboxWithButton";
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