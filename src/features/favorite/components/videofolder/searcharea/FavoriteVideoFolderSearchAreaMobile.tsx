import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { DEFAULT_FOLDER_COLOR } from "../../../const/FavoriteConst";
import { FolderType } from "../../../types/videolist/FolderType";
import { FavoriteDeleteFolderModal } from "./deletefolder/FavoriteDeleteFolderModal";
import { FavoriteUpdateFolderModal } from "./updatefolder/FavoriteUpdateFolderModal";


const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 6%;
  color: white;
`;

const SecondRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 4%;
  margin-top: 10px;
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
        {/* フォルダ名変更モーダル */}
        <FavoriteUpdateFolderModal
          folder={props.folder}
        />
        {/* フォルダ削除モーダル */}
        <FavoriteDeleteFolderModal />
      </FirstRowDiv>
      <SecondRowDiv>
      </SecondRowDiv>
    </Parent>
  );
}