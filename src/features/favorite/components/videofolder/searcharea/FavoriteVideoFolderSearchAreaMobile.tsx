import React from 'react';
import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { DEFAULT_FOLDER_COLOR } from "../../../const/FavoriteConst";
import { useFavoriteVideoFolderSearchArea } from '../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchArea';
import { FolderMasterType } from '../../../types/videolist/FolderMasterType';
import { FavoriteCreateFolderInFolderModal } from './createfolder/FavoriteCreateFolderInFolderModal';
import { FavoriteDeleteFolderModal } from "./deletefolder/FavoriteDeleteFolderModal";
import { FavoriteVideoFolderSearchSelectedTag } from './FavoriteVideoFolderSearchSelectedTag';
import { FavoriteVideoFolderSearchSortArea } from './FavoriteVideoFolderSearchSortArea';
import { FavoriteVideoFolderSearchSwichModeContainer } from './FavoriteVideoFolderSearchSwichModeContainer';
import { FavoriteVideoFolderSearchText } from './FavoriteVideoFolderSearchText';
import { FavoriteVideoFolderSearchFilterModal } from './filter/FavoriteVideoFolderSearchFilterModal';
import { FavoriteUpdateFolderModal } from "./updatefolder/FavoriteUpdateFolderModal";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 10%;
  color: white;
`;

const FolderNameArea = styled.div`
  font-size: 17px;
  display:flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 13px;
  margin-right: 23px;
`;

const FolderNameSpan = styled.span`
`;

const ArrowSpan = styled.span`
`;

const FirstRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  color: white;
  font-size: 24px;
  flex-wrap: wrap;
`;

const OperationRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ModeRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

type propsType = {
  folderList: FolderMasterType[] | undefined
}

/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchAreaMobile(props: propsType) {

  console.log("FavoriteVideoFolderSearchAreaMobile render");

  const { clickFolderName } = useFavoriteVideoFolderSearchArea();

  const folderList = props.folderList;

  if (!folderList) {
    return null;
  }

  const folder = folderList[folderList.length - 1];
  const folderColor = folder.folderColor || DEFAULT_FOLDER_COLOR;

  return (
    <Parent>
      <ModeRowDiv>
        {/* 表示切替 */}
        <FavoriteVideoFolderSearchSwichModeContainer />
      </ModeRowDiv>
      <FirstRowDiv>
        <Icon
          icon={FaFolder}
          style={{
            marginRight: `15px`,
          }}
          bgColor={folderColor}
          width="30px"
          height="100%"
        />
        <FolderNameArea>
          {
            (folderList.length >= 3
              ? [folderList[0], null, folderList[folderList.length - 1]]
              : folderList
            ).map((e, index, arr) => {
              const isLast = index !== arr.length - 1;
              if (e === null) {
                return (
                  <React.Fragment
                    key="ellipsis"
                  >
                    <FolderNameSpan>...</FolderNameSpan>
                    <ArrowSpan>&gt;</ArrowSpan>
                  </React.Fragment>
                );
              }
              return (
                <React.Fragment
                  key={e.id}
                >
                  <FolderNameSpan
                    style={isLast ? { "color": "#2563eb", "cursor": "pointer" } : {}}
                    onClick={() => {
                      clickFolderName(e.id);
                    }}
                  >
                    {e.name}
                  </FolderNameSpan>
                  {
                    isLast &&
                    <ArrowSpan>
                      &gt;
                    </ArrowSpan>
                  }
                </React.Fragment>
              );
            })
          }
        </FolderNameArea>
      </FirstRowDiv>
      <OperationRowDiv>
        {/* フォルダ名変更モーダル */}
        <FavoriteUpdateFolderModal
          folder={folder}
        />
        {/* フォルダ削除モーダル */}
        <FavoriteDeleteFolderModal />
      </OperationRowDiv>
      <OperationRowDiv>
        {/* タイトルフィルター */}
        <FavoriteVideoFolderSearchText
          width="70%"
        />
      </OperationRowDiv>
      <OperationRowDiv>
        {/* 並び替えリスト */}
        <FavoriteVideoFolderSearchSortArea />
      </OperationRowDiv>
      <OperationRowDiv>
        {/* フィルター */}
        <FavoriteVideoFolderSearchFilterModal />
        {/* フォルダ作成 */}
        <FavoriteCreateFolderInFolderModal />
      </OperationRowDiv>
      <OperationRowDiv>
        {/* 選択中のタグ */}
        <FavoriteVideoFolderSearchSelectedTag />
      </OperationRowDiv>
    </Parent>
  );
}