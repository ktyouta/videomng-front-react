import React from "react";
import styled from "styled-components";
import { FavoriteSearchSelectedTag } from "./FavoriteSearchSelectedTag";
import { FavoriteSearchSortArea } from "./FavoriteSearchSortArea";
import { FavoriteSearchText } from "./FavoriteSearchText";
import { FavoriteSearchCsvExportModal } from "./csv/export/FavoriteSearchCsvExportModal";
import { FavoriteSearchCsvImportModal } from "./csv/import/FavoriteSearchCsvImportModal";
import { FavoriteSearchFilterModal } from "./filter/FavoriteSearchFilterModal";
import { FavoriteCreateFolderModal } from "./folder/FavoriteCreateFolderModal";

const OperationRowDiv = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
`;

const SelectedTagAreaDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 13%;
  padding-left: 9%;
  margin-top:1%;
`;


/**
 * 検索条件エリア
 */
export function FavoriteSearchAreaPc() {

  console.log("FavoriteSearchArea render");

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}