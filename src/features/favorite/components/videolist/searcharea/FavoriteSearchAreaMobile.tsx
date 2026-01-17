import styled from "styled-components";
import { FavoriteSearchCsvExportModal } from "./csv/export/FavoriteSearchCsvExportModal";
import { FavoriteSearchCsvImportModal } from "./csv/import/FavoriteSearchCsvImportModal";
import { FavoriteSearchSelectedTag } from "./FavoriteSearchSelectedTag";
import { FavoriteSearchSortArea } from "./FavoriteSearchSortArea";
import { FavoriteSearchSwichMode } from "./FavoriteSearchSwichMode";
import { FavoriteSearchText } from "./FavoriteSearchText";
import { FavoriteSearchFilterModal } from "./filter/FavoriteSearchFilterModal";
import { FavoriteCreateFolderModal } from "./folder/FavoriteCreateFolderModal";

const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 6%;
`;

const OperationRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ModeRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

/**
 * 検索条件エリア
 */
export function FavoriteSearchAreaMobile() {

  console.log("FavoriteSearchAreaMobile render");

  return (
    <Parent>
      <ModeRowDiv>
        {/* 表示切替 */}
        <FavoriteSearchSwichMode />
      </ModeRowDiv>
      {/* タイトルフィルター */}
      <FavoriteSearchText
        width="70%"
      />
      <OperationRowDiv>
        {/* 並び替えリスト */}
        <FavoriteSearchSortArea />
      </OperationRowDiv>
      <OperationRowDiv>
        {/* フィルター用モーダル */}
        <FavoriteSearchFilterModal />
        {/* フォルダ作成 */}
        <FavoriteCreateFolderModal />
      </OperationRowDiv>
      <OperationRowDiv>
        {/* 保存 */}
        <FavoriteSearchCsvImportModal />
        {/* 取込 */}
        <FavoriteSearchCsvExportModal />
      </OperationRowDiv>
      {/* 選択中のタグ */}
      <FavoriteSearchSelectedTag />
    </Parent>
  );
}