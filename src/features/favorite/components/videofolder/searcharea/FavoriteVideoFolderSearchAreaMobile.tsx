import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { DEFAULT_FOLDER_COLOR } from "../../../const/FavoriteConst";
import { FolderType } from "../../../types/videolist/FolderType";
import { FavoriteDeleteFolderModal } from "./deletefolder/FavoriteDeleteFolderModal";
import { FavoriteVideoFolderSearchSelectedTag } from './FavoriteVideoFolderSearchSelectedTag';
import { FavoriteVideoFolderSearchSortArea } from './FavoriteVideoFolderSearchSortArea';
import { FavoriteVideoFolderSearchFilterModal } from './filter/FavoriteVideoFolderSearchFilterModal';
import { FavoriteUpdateFolderModal } from "./updatefolder/FavoriteUpdateFolderModal";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 3%;
  color: white;
`;

const SecondRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 20px;
  padding-right: 13%;
  padding-left: 9%;
  flex-wrap: wrap;
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
  padding-right: 13%;
  padding-left: 9%;
  color: white;
  font-size: 24px;
  flex-wrap: wrap;
`;

const ThirdRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const FourthRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 7%;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const FifthRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 7%;
  flex-wrap: wrap;
  margin-top: 20px;
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
      <SecondRowDiv>
        {/* フォルダ名変更モーダル */}
        <FavoriteUpdateFolderModal
          folder={props.folder}
        />
        {/* フォルダ削除モーダル */}
        <FavoriteDeleteFolderModal />
        {/* フィルター */}
        <FavoriteVideoFolderSearchFilterModal />
      </SecondRowDiv>
      <ThirdRowDiv>
        {/* 並び替えリスト */}
        <FavoriteVideoFolderSearchSortArea />
      </ThirdRowDiv>
      <FifthRowDiv>
        {/* 選択中のタグ */}
        <FavoriteVideoFolderSearchSelectedTag />
      </FifthRowDiv>
    </Parent>
  );
}