import styled from "styled-components";
import React from "react";
import { FolderType } from "../../../types/videolist/FolderType";
import { IconComponent } from "../../../../../components/IconComponent";
import { FaFolder } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import { Icon } from "../../../../../components/Icon";
import { FaRegTrashAlt } from "react-icons/fa";
import { FavoriteUpdateFolderModal } from "./updatefolder/FavoriteUpdateFolderModal";
import { FavoriteDeleteFolderModal } from "./deletefolder/FavoriteDeleteFolderModal";


const FirstRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
  color: white;
`;

const SecondRowDiv = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
`;

const ThirdRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
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

  return (
    <React.Fragment>
      <FirstRowDiv>
        <Icon
          icon={FaFolder}
          style={{
            marginRight: `15px`,
          }}
          bgColor="rgb(144, 202, 249)"
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
      </FirstRowDiv>
      <SecondRowDiv>
      </SecondRowDiv>
      <ThirdRowDiv>
      </ThirdRowDiv>
    </React.Fragment>
  );
}