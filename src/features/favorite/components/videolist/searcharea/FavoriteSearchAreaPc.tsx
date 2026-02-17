import styled from "styled-components";
import { FavoriteSearchSelectedTag } from "./FavoriteSearchSelectedTag";
import { FavoriteSearchSortArea } from "./FavoriteSearchSortArea";
import { FavoriteSearchSwichModeContainer } from "./FavoriteSearchSwichModeContainer";
import { FavoriteSearchText } from "./FavoriteSearchText";
import { FavoriteSearchCsvExportModal } from "./csv/export/FavoriteSearchCsvExportModal";
import { FavoriteSearchCsvImportModal } from "./csv/import/FavoriteSearchCsvImportModal";
import { FavoriteSearchFilterModal } from "./filter/FavoriteSearchFilterModal";
import { FavoriteCreateFolderModal } from "./folder/FavoriteCreateFolderModal";


const Parent = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 8%;
`;

const OperationRowDiv = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const SwitchModeRowDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 40px;
`;

const SelectedTagAreaDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-top:35px;
`;

/**
 * 検索条件エリア
 */
export function FavoriteSearchAreaPc() {

  console.log("FavoriteSearchArea render");

  return (
    <Parent>
      <SwitchModeRowDiv>
        {/* 表示切替 */}
        <FavoriteSearchSwichModeContainer />
      </SwitchModeRowDiv>
      <OperationRowDiv>
        {/* タイトルフィルター */}
        <FavoriteSearchText
          width="85%"
        />
        {/* 並び替えリスト */}
        <FavoriteSearchSortArea />
        {/* フィルター用モーダル */}
        <FavoriteSearchFilterModal />
        {/* フォルダ作成 */}
        <FavoriteCreateFolderModal />
        {/* 保存 */}
        <FavoriteSearchCsvImportModal />
        {/* 取込 */}
        <FavoriteSearchCsvExportModal />
      </OperationRowDiv>
      <SelectedTagAreaDiv>
        {/* 選択中のタグ */}
        <FavoriteSearchSelectedTag />
      </SelectedTagAreaDiv>
    </Parent>
  );
}