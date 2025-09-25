import React from "react";
import { IconComponent } from "../../../../../../Common/Component/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { MEDIA } from "../../../../../../Common/Const/MediaConst";
import { FavoriteSearchCsvExportHeader } from "./FavoriteSearchCsvExportHeader";
import { FavoriteSearchCsvExportMain } from "./FavoriteSearchCsvExportMain";


type propsType = {
  close: () => void;
}

export function FavoriteSearchCsvExport(props: propsType) {

  console.log("FavoriteSearchCsvExport render");

  return (
    <React.Fragment>
      {/* ヘッダー */}
      <FavoriteSearchCsvExportHeader
        close={props.close}
      />
      <FavoriteSearchCsvExportMain
        close={props.close}
      />
    </React.Fragment>
  );
}