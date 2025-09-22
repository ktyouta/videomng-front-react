import styled from "styled-components";
import { ClearableTextbox } from "../../../../Common/Component/ClearableTextbox";
import { useFavoriteSearchText } from "../../../Hook/VideoList/SearchArea/useFavoriteSearchText";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import React from "react";


const Parent = styled.div`
  flex: 0 1 660px;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-right:3%;
`;

const TitleSpan = styled.span`
  margin-right:7px;
  color: white;
  font-size: 12px;
  white-space: nowrap;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

type propsType = {
  width: string,
}

export function FavoriteSearchText(props: propsType) {

  const {
    inputKeyword,
    setInputKeyword,
    clearInput,
    filterVideoList,
    handleKeyPress } = useFavoriteSearchText();

  return (
    <Parent>
      <TitleSpan>
        タイトル：
      </TitleSpan>
      <ClearableTextbox
        width={props.width}
        height="99%"
        textWidth="90%"
        placeholder=""
        value={inputKeyword}
        onChange={setInputKeyword}
        style={{
          borderRadius: 6,
          backgroundColor: `#ececec`
        }}
        textStyle={{
          backgroundColor: `#ececec`
        }}
        clear={clearInput}
        onBlur={filterVideoList}
        onKeyDown={handleKeyPress}
      />
    </Parent>
  );
}