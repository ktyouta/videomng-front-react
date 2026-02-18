import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { DEFAULT_FOLDER_COLOR } from "../../../const/FavoriteConst";
import { FolderType } from "../../../types/videolist/FolderType";
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

const FolderNameSpan = styled.span`
  font-size: 17px;
  margin-right: 23px;
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
  folder: FolderType | undefined
}

/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchAreaMobile(props: propsType) {

  console.log("FavoriteVideoFolderSearchAreaMobile render");

  if (!props.folder) {
    return null;
  }

  const folderColor = props.folder.folderColor || DEFAULT_FOLDER_COLOR;

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
        <FolderNameSpan>
          {props.folder?.name}
        </FolderNameSpan>
      </FirstRowDiv>
      <OperationRowDiv>
        {/* フォルダ名変更モーダル */}
        <FavoriteUpdateFolderModal
          folder={props.folder}
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