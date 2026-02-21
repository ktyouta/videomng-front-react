import React from 'react';
import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { DEFAULT_FOLDER_COLOR } from "../../../const/FavoriteConst";
import { useFavoriteVideoFolderSearchArea } from '../../../hooks/videofolder/searcharea/useFavoriteVideoFolderSearchArea';
import { FolderMasterType } from '../../../types/videolist/FolderMasterType';
import { FavoriteCreateFolderInFolderModal } from "./createfolder/FavoriteCreateFolderInFolderModal";
import { FavoriteDeleteFolderModal } from "./deletefolder/FavoriteDeleteFolderModal";
import { FavoriteVideoFolderSearchSelectedTag } from "./FavoriteVideoFolderSearchSelectedTag";
import { FavoriteVideoFolderSearchSortArea } from "./FavoriteVideoFolderSearchSortArea";
import { FavoriteVideoFolderSearchSwichModeContainer } from './FavoriteVideoFolderSearchSwichModeContainer';
import { FavoriteVideoFolderSearchText } from "./FavoriteVideoFolderSearchText";
import { FavoriteVideoFolderSearchFilterModal } from "./filter/FavoriteVideoFolderSearchFilterModal";
import { FavoriteUpdateFolderModal } from "./updatefolder/FavoriteUpdateFolderModal";


const Parent = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 8%;
`;

const FirstRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  color: white;
  flex-wrap: wrap;
`;

const OperationRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 40px;
`;

const TagRowDiv = styled(OperationRowDiv)`
  margin-top: 20px;
`;

const FolderNameArea = styled.div`
  font-size: 25px;
  display:flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-right: 35px;
`;

const FolderNameSpan = styled.span`
`;

const ArrowSpan = styled.span`
`;

const SwitchModeRowDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 40px;
`;

type propsType = {
  folderList: FolderMasterType[] | undefined
}

/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchAreaPc(props: propsType) {

  console.log("FavoriteVideoFolderSearchAreaPc render");

  const { clickFolderName } = useFavoriteVideoFolderSearchArea();

  const folderList = props.folderList;

  if (!folderList) {
    return null;
  }

  const folder = folderList[folderList.length - 1];
  const folderColor = folder.folderColor || DEFAULT_FOLDER_COLOR;

  return (
    <Parent>
      <SwitchModeRowDiv>
        {/* 表示切替 */}
        <FavoriteVideoFolderSearchSwichModeContainer />
      </SwitchModeRowDiv>
      <FirstRowDiv>
        <Icon
          icon={FaFolder}
          style={{
            marginRight: `15px`,
          }}
          bgColor={folderColor}
          width="38px"
        />
        <FolderNameArea>
          {
            folderList.map((e, index) => {
              const isLast = index !== folderList.length - 1
              return (
                <React.Fragment>
                  <FolderNameSpan
                    style={isLast ? { "color": "#2563eb", "cursor": "pointer", "borderBottom": "1px solid" } : {}}
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
              )
            })
          }
        </FolderNameArea>
        {/* フォルダ名変更モーダル */}
        <FavoriteUpdateFolderModal
          folder={folder}
        />
        {/* フォルダ削除モーダル */}
        <FavoriteDeleteFolderModal
          folder={folder}
        />
      </FirstRowDiv>
      <OperationRowDiv>
        {/* タイトルフィルター */}
        <FavoriteVideoFolderSearchText
          width="85%"
        />
        {/* 並び替えリスト */}
        <FavoriteVideoFolderSearchSortArea />
        {/* フィルター */}
        <FavoriteVideoFolderSearchFilterModal />
        {/* フォルダ作成 */}
        <FavoriteCreateFolderInFolderModal />
      </OperationRowDiv>
      <TagRowDiv>
        {/* 選択中のタグ */}
        <FavoriteVideoFolderSearchSelectedTag />
      </TagRowDiv>
    </Parent>
  );
}