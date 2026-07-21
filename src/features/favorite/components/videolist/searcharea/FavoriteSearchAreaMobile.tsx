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
import { FavoriteSearchFilterModal } from "./filter/FavoriteSearchFilterModal";
import { FavoriteCreateFolderModal } from "./folder/FavoriteCreateFolderModal";

const Parent = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 6%;
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
  box-sizing: border-box;
`;

const ModeRowDiv = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: ${FAVORITE_SEARCH_AREA_SECTION_GAP};
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
        <FavoriteSearchSwichModeContainer />
      </ModeRowDiv>
      <OperationPanelDiv>
        <TextRowDiv>
          {/* タイトルフィルター */}
          <FavoriteSearchText />
        </TextRowDiv>
        <SortRowDiv>
          {/* 並び替えリスト */}
          <FavoriteSearchSortArea />
        </SortRowDiv>
        <ActionRowDiv>
          {/* フィルター用モーダル */}
          <FavoriteSearchFilterModal />
          {/* フォルダ作成 */}
          <FavoriteCreateFolderModal />
        </ActionRowDiv>
      </OperationPanelDiv>
      {/* 選択中のタグ */}
      <FavoriteSearchSelectedTag />
    </Parent>
  );
}