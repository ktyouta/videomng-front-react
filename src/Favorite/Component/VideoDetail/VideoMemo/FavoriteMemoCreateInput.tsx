import styled from "styled-components";
import BaseTextbox from "../../../../Common/Component/BaseTextbox";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { FaArrowUp } from "react-icons/fa";
import { useFavoriteMemoCreateInput } from "../../../Hook/VideoDetail/VideoMemo/useFavoriteMemoCreateInput";
import { ClearableTextbox } from "../../../../Common/Component/ClearableTextbox";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import React from "react";
import { TextboxWithButton } from "../../../../Common/Component/TextboxWithButton";


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