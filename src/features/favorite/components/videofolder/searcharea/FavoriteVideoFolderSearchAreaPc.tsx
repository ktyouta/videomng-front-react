import React from "react";
import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { DEFAULT_FOLDER_COLOR } from "../../../const/FavoriteConst";
import { FolderType } from "../../../types/videolist/FolderType";
import { FavoriteDeleteFolderModal } from "./deletefolder/FavoriteDeleteFolderModal";
import { FavoriteVideoFolderSearchSortArea } from "./FavoriteVideoFolderSearchSortArea";
import { FavoriteVideoFolderSearchFilterModal } from "./filter/FavoriteVideoFolderSearchFilterModal";
import { FavoriteUpdateFolderModal } from "./updatefolder/FavoriteUpdateFolderModal";


const FirstRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 8%;
  color: white;
  flex-wrap: wrap;
`;

const SecondRowDiv = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 8%;
  flex-wrap: wrap;
`;

const ThirdRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 8%;
  flex-wrap: wrap;
`;

const FolderNameSpan = styled.span`
  font-size: 24px;
  margin-right: 35px;
`;

type propsType = {
  folder: FolderType | undefined
}

/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchAreaPc(props: propsType) {

  console.log("FavoriteVideoFolderSearchAreaPc render");

  if (!props.folder) {
    return null;
  }

  const folderColor = props.folder.folderColor || DEFAULT_FOLDER_COLOR;

  return (
    <React.Fragment>
      <FirstRowDiv>
        <Icon
          icon={FaFolder}
          style={{
            marginRight: `15px`,
          }}
          bgColor={folderColor}
          width="38px"
        />
        <FolderNameSpan>
          {props.folder.name}
        </FolderNameSpan>
        {/* フォルダ名変更モーダル */}
        <FavoriteUpdateFolderModal
          folder={props.folder}
        />
        {/* フォルダ削除モーダル */}
        <FavoriteDeleteFolderModal />
        {/* 並び替えリスト */}
        <FavoriteVideoFolderSearchSortArea />
        {/* フィルター */}
        <FavoriteVideoFolderSearchFilterModal />
      </FirstRowDiv>
      <SecondRowDiv>
      </SecondRowDiv>
      <ThirdRowDiv>
      </ThirdRowDiv>
    </React.Fragment>
  );
}