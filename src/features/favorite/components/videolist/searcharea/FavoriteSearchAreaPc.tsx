import styled from "styled-components";
import {
  FAVORITE_SEARCH_AREA_PANEL_BG,
  FAVORITE_SEARCH_AREA_PANEL_BORDER,
  FAVORITE_SEARCH_AREA_PANEL_SHADOW,
  FAVORITE_SEARCH_AREA_SECTION_GAP,
} from "../../../const/FavoriteConst";
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
  padding: 0 6%;
`;

const OperationRowDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 18px;
  border-radius: 12px;
  background-color: ${FAVORITE_SEARCH_AREA_PANEL_BG};
  border: 1px solid ${FAVORITE_SEARCH_AREA_PANEL_BORDER};
  box-shadow: ${FAVORITE_SEARCH_AREA_PANEL_SHADOW};
`;

const SwitchModeRowDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: ${FAVORITE_SEARCH_AREA_SECTION_GAP};
`;

const SelectedTagAreaDiv = styled.div`
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: ${FAVORITE_SEARCH_AREA_SECTION_GAP};
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
        <FavoriteSearchText />
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