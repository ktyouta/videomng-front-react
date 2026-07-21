import React from "react";
import { FaFilter } from 'react-icons/fa';
import { ModalPortal } from "../../../../../../components/ModalPortal";
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
      {/* フィルターモーダル */}
      <ModalPortal
        isOpen={isOpenFilterModal}
        modalWidth={isMobile ? `93%` : `45%`}
        modalMinHeight="70%"
        isCloseOuter={true}
        close={closeFilterModal}
      >
        <FavoriteVideoFolderSearchCondition
          isMobile={isMobile}
          close={closeFilterModal}
        />
      </ModalPortal>
    </React.Fragment>
  );
}
