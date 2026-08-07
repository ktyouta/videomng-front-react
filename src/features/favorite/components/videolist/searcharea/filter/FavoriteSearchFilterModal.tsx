import React from "react";
import { FaFilter } from 'react-icons/fa';
import { useFavoriteSearchFilterModal } from "../../../../hooks/videolist/searcharea/filter/useFavoriteSearchFilterModal";
import { FavoriteSearchActionButton } from "../../../FavoriteSearchActionButton";
import { FavoriteSearchCondition } from "./FavoriteSearchCondition";


/**
 * 検索条件エリア
 */
export function FavoriteSearchFilterModal() {

  console.log("FavoriteSearchFilterModal render");

  const {
    isOpenFilterModal,
    openFilterModal,
    closeFilterModal,
    isMobile } = useFavoriteSearchFilterModal();


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
        <FavoriteSearchCondition
          isOpen={isOpenFilterModal}
          close={closeFilterModal}
          isMobile={isMobile}
        />
      }
    </React.Fragment>
  );
}