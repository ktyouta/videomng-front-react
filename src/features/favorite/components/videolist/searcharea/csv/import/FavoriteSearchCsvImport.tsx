import React from "react";
import { IconComponent } from "../../../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { MEDIA } from "../../../../../../../consts/MediaConst";
import { FavoriteSearchCsvImportHeader } from "./FavoriteSearchCsvImportHeader";
import { FavoriteSearchCsvImportMain } from "./FavoriteSearchCsvImportMain";
import { FavoriteSearchCsvImportFooter } from "./FavoriteSearchCsvImportFooter";


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

export function FavoriteSearchCsvImport(props: propsType) {

  console.log("FavoriteSearchCsvImport render");

  return (
    <React.Fragment>
      {/* ヘッダー */}
      <FavoriteSearchCsvImportHeader
        close={props.close}
      />
      {/* 説明文 */}
      <FavoriteSearchCsvImportMain />
      {/* フッター */}
      <FavoriteSearchCsvImportFooter
        close={props.close}
        height={"45px"}
      />
    </React.Fragment>
  );
}