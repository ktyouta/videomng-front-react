import React from "react";
import { IconComponent } from "../../../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { MEDIA } from "../../../../../../Common/Const/MediaConst";
import { FavoriteSearchCsvExportHeader } from "./FavoriteSearchCsvExportHeader";
import { FavoriteSearchCsvExportMain } from "./FavoriteSearchCsvExportMain";
import { FavoriteSearchCsvExportFooter } from "./FavoriteSearchCsvExportFooter";
import { useFavoriteSearchCsvExport } from "../../../../../Hook/VideoList/SearchArea/Csv/Export/useFavoriteSearchCsvExport";


const Parent = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
  padding-top:1%;
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

export function FavoriteSearchCsvExport(props: propsType) {

  console.log("FavoriteSearchCsvExport render");

  const {
    selectedFile,
    handleFileChange } = useFavoriteSearchCsvExport();

  return (
    <React.Fragment>
      {/* ヘッダー */}
      <FavoriteSearchCsvExportHeader
        close={props.close}
      />
      {/* 説明文 */}
      <FavoriteSearchCsvExportMain
        handleFileChange={handleFileChange}
        selectedFile={selectedFile}
      />
      {/* フッター */}
      <FavoriteSearchCsvExportFooter
        close={props.close}
        height={"45px"}
        selectedFile={selectedFile}
      />
    </React.Fragment>
  );
}