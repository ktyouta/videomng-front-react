import styled from "styled-components";
import { ClearableTextbox } from "../../../../Common/Component/ClearableTextbox";
import { useFavoriteSearchText } from "../../../Hook/VideoList/SearchArea/useFavoriteSearchText";
import { MEDIA } from "../../../../Common/Const/MediaConst";
import React from "react";


const TitleSpan = styled.span`
  margin-right:7px;
  color: white;
  font-size: 12px;

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

export function FavoriteSearchText() {

    const {
        inputKeyword,
        setInputKeyword,
        clearInput,
        filterVideoList,
        handleKeyPress } = useFavoriteSearchText();

    return (
        <React.Fragment>
            <TitleSpan>
                タイトル：
            </TitleSpan>
            <ClearableTextbox
                width="50%"
                height="99%"
                placeholder=""
                value={inputKeyword}
                onChange={setInputKeyword}
                style={{
                    borderRadius: 6,
                    marginRight: `3%`
                }}
                clear={clearInput}
                onBlur={filterVideoList}
                onKeyDown={handleKeyPress}
            />
        </React.Fragment>
    );
}