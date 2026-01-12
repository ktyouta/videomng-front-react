import React from "react";
import { FavoriteSearchCsvImportFooter } from "./FavoriteSearchCsvImportFooter";
import { FavoriteSearchCsvImportHeader } from "./FavoriteSearchCsvImportHeader";
import { FavoriteSearchCsvImportMain } from "./FavoriteSearchCsvImportMain";


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