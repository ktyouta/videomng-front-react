import React from "react";
import styled from "styled-components";
import { useFavoriteSearchCsvArea } from "../../../../Hook/VideoList/SearchArea/Csv/useFavoriteSearchCsvArea";
import { FavoriteSearchCsvImportModal } from "./Import/FavoriteSearchCsvImportModal";
import { FavoriteSearchCsvExportModal } from "./Export/FavoriteSearchCsvExportModal";


const FilterTitleSpan = styled.span`
  color: #9e9e9e;
  font-size: 14px;
  white-space: nowrap;
`;

/**
 * CSV出力モーダル
 */
export function FavoriteSearchCsvArea() {

    console.log("FavoriteSearchCsvArea render");

    const { isMobile } = useFavoriteSearchCsvArea();

    return (
        <React.Fragment>
            {
                !isMobile &&
                <FilterTitleSpan >
                    保存・取込：
                </FilterTitleSpan>
            }
            {/* 保存 */}
            <FavoriteSearchCsvImportModal />
            {/* 取込 */}
            <FavoriteSearchCsvExportModal />
        </React.Fragment>
    );
}