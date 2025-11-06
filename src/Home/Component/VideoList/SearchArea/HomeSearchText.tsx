import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { IconComponent } from "../../../../Common/Component/IconComponent";
import { ClearableTextbox } from "../../../../Common/Component/ClearableTextbox";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import { useHomeSearchText } from "../../../Hook/VideoList/SearchArea/useHomeSearchText";
import { TextboxWithButton } from "../../../../Common/Component/TextboxWithButton";
import React from "react";
import { IconBaseProps } from "react-icons";


const TextBoxAreaDiv = styled.div`
  width: 78%;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 1%;
`;

const SearchIconAreaDiv = styled.div`
  background-color:#FF9900;
  width: 47px;
  height: 99%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    width: 38px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    width: 40px;
  }

  @media (min-width: ${MEDIA.PC}) {
    width: 47px;
  }
`;


/**
 * 検索条件テキストエリア
 */
export function HomeSearchText() {

  console.log("HomeSearchText render");

  const {
    clickSearchBtn,
    clearInput,
    isMobile,
    handleKeyPress,
    inputKeyword,
    setInputKeyword, } = useHomeSearchText();

  return (
    <React.Fragment>
      {/* <TextboxWithButton
        clear={clearInput}
        icon={IoSearch}
        onClick={clickSearchBtn}
        backgroundColor="#ececec"
        value={inputKeyword}
        onChange={setInputKeyword}
        placeholder="キーワード"
        width={isMobile ? "71%" : "74%"}
        height="99%"
      /> */}
      <TextBoxAreaDiv>
        <ClearableTextbox
          width={isMobile ? "85%" : "89%"}
          height="99%"
          placeholder="キーワード"
          value={inputKeyword}
          onChange={setInputKeyword}
          style={{
            borderBottomLeftRadius: 6,
            borderTopLeftRadius: 6,
          }}
          backgroundColor="#ececec"
          clear={clearInput}
          onKeyDown={handleKeyPress}
        />
        {/* 検索ボタン */}
        <SearchIconAreaDiv>
          <IconComponent
            icon={IoSearch}
            onclick={clickSearchBtn}
            size="75%"
          />
        </SearchIconAreaDiv>
      </TextBoxAreaDiv>
    </React.Fragment>
  );
}