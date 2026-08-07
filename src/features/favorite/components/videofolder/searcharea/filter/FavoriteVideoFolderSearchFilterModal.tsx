import React from "react";
import { FaFilter } from 'react-icons/fa';
import { useFavoriteVideoFolderSearchFilterModal } from "../../../../hooks/videofolder/searcharea/filter/useFavoriteVideoFolderSearchFilterModal";
import { FavoriteSearchActionButton } from "../../../FavoriteSearchActionButton";
import { FavoriteVideoFolderSearchCondition } from "./FavoriteVideoFolderSearchCondition";


/**
 * 検索条件エリア
 */
export function FavoriteVideoFolderSearchFilterModal() {

  console.log("FavoriteVideoFolderSearchFilterModal render");

  const {
    isOpenFilterModal,
    openFilterModal,
    closeFilterModal,
    isMobile } = useFavoriteVideoFolderSearchFilterModal();


  return (
    <React.Fragment>
      <FavoriteSearchActionButton
        icon={FaFilter}
        label="フィルター"
        onClick={openFilterModal}
      />
      {/* フィルターモーダル（閉じている間は内部状態・取得を保持しないため未マウントにする） */}
      {
        isOpenFilterModal &&
        <FavoriteVideoFolderSearchCondition
          isOpen={isOpenFilterModal}
          close={closeFilterModal}
          isMobile={isMobile}
        />
      }
    </React.Fragment>
  );
}
