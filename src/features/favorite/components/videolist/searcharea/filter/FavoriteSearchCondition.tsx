import React from "react";
import { IconComponent } from "../../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { FavoriteSearchConditionHeader } from "./FavoriteSearchConditionHeader";
import { FavoriteSearchConditionMain } from "./FavoriteSearchConditionMain";
import { MEDIA } from "../../../../../../consts/MediaConst";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
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

type propsType = {
  close: () => void;
}

export function FavoriteSearchCondition(props: propsType) {

  console.log("FavoriteSearchCondition render");

  return (
    <Parent>
      {/* 検索条件指定ヘッダ */}
      <FavoriteSearchConditionHeader
        close={props.close}
      />
      {/* 検索条件指定コンテンツ */}
      <FavoriteSearchConditionMain
        close={props.close}
      />
    </Parent>
  );
}