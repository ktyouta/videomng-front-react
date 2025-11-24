import React from "react";
import { IconComponent } from "../../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { FavoriteCreateFolderHeader } from "./FavoriteCreateFolderHeader";
import { FavoriteCreateFolderMain } from "./FavoriteCreateFolderMain";


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

export function FavoriteCreateFolder(props: propsType) {

    console.log("FavoriteCreateFolder render");

    return (
        <Parent>
            {/* フォルダ作成ヘッダ */}
            <FavoriteCreateFolderHeader
                close={props.close}
            />
            {/* フォルダ作成コンテンツ */}
            <FavoriteCreateFolderMain
                close={props.close}
            />
        </Parent>
    );
}