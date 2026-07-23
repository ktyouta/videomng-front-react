import React from 'react';
import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import {
  DEFAULT_FOLDER_COLOR,
  FAVORITE_SEARCH_AREA_BUTTON_GAP,
  FAVORITE_SEARCH_AREA_PANEL_BG,
  FAVORITE_SEARCH_AREA_PANEL_BORDER,
  FAVORITE_SEARCH_AREA_PANEL_SHADOW,
  FAVORITE_SEARCH_AREA_SECTION_GAP,
} from "../../../const/FavoriteConst";
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
  padding: 0 6%;
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

const BreadcrumbPanelDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  color: white;
  padding: 14px 14px;
  border-radius: 12px;
  background-color: ${FAVORITE_SEARCH_AREA_PANEL_BG};
  border: 1px solid ${FAVORITE_SEARCH_AREA_PANEL_BORDER};
  box-shadow: ${FAVORITE_SEARCH_AREA_PANEL_SHADOW};
  margin-bottom: ${FAVORITE_SEARCH_AREA_SECTION_GAP};
`;

const FolderNameRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 24px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const FolderActionRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  gap: ${FAVORITE_SEARCH_AREA_BUTTON_GAP};
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const OperationPanelDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 14px;
  border-radius: 12px;
  background-color: ${FAVORITE_SEARCH_AREA_PANEL_BG};
  border: 1px solid ${FAVORITE_SEARCH_AREA_PANEL_BORDER};
  box-shadow: ${FAVORITE_SEARCH_AREA_PANEL_SHADOW};
  margin-top: ${FAVORITE_SEARCH_AREA_SECTION_GAP};
  margin-bottom: ${FAVORITE_SEARCH_AREA_SECTION_GAP};
`;

const TextRowDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 12px;
`;

const SortRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 12px;
`;

const ActionRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  gap: ${FAVORITE_SEARCH_AREA_BUTTON_GAP};
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const ModeRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 19px;
  margin-bottom: ${FAVORITE_SEARCH_AREA_SECTION_GAP};
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
      <BreadcrumbPanelDiv>
        <FolderNameRowDiv>
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
        </FolderNameRowDiv>
        <FolderActionRowDiv>
          {/* フォルダ名変更モーダル */}
          <FavoriteUpdateFolderModal
            folder={folder}
          />
          {/* フォルダ削除モーダル */}
          <FavoriteDeleteFolderModal
            folder={folder}
          />
        </FolderActionRowDiv>
      </BreadcrumbPanelDiv>
      <OperationPanelDiv>
        <TextRowDiv>
          {/* タイトルフィルター */}
          <FavoriteVideoFolderSearchText
            width="100%"
            marginRight="0"
          />
        </TextRowDiv>
        <SortRowDiv>
          {/* 並び替えリスト */}
          <FavoriteVideoFolderSearchSortArea />
        </SortRowDiv>
        <ActionRowDiv>
          {/* フィルター */}
          <FavoriteVideoFolderSearchFilterModal />
          {/* フォルダ作成 */}
          <FavoriteCreateFolderInFolderModal />
        </ActionRowDiv>
      </OperationPanelDiv>
      {/* 選択中のタグ */}
      <FavoriteVideoFolderSearchSelectedTag />
    </Parent>
  );
}
