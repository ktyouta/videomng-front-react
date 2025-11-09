import styled from "styled-components";
import BaseTextbox from "../../../../../components/BaseTextbox";
import { IconComponent } from "../../../../../components/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../../../hooks/videodetail/videomemo/useFavoriteMemoCreateInput";
import { ClearableTextbox } from "../../../../../components/ClearableTextbox";
import { MEDIA } from "../../../../../consts/MediaConst";
import React from "react";
import { TextboxWithButton } from "../../../../../components/TextboxWithButton";


export function FavoriteMemoCreateInput() {

  console.log("FavoriteMemoCreateInput render");

  const {
    inputMemo,
    setInputMemo,
    addToMemo,
    clearInputMemo,
  } = useFavoriteMemoCreateInput();

  return (
    <TextboxWithButton
      clear={clearInputMemo}
      icon={FaArrowUp}
      onClick={addToMemo}
      backgroundColor="#ececec"
      value={inputMemo}
      onChange={setInputMemo}
      placeholder="メモ"
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