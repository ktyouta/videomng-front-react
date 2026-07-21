import React from "react";
import { FaFilter } from 'react-icons/fa';
import { ModalPortal } from "../../../../../../components/ModalPortal";
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
      {/* フィルターモーダル */}
      <ModalPortal
        isOpen={isOpenFilterModal}
        modalWidth={isMobile ? `93%` : `45%`}
        modalMinHeight="70%"
        isCloseOuter={true}
        close={closeFilterModal}
      >
        <FavoriteSearchCondition
          isMobile={isMobile}
          close={closeFilterModal}
        />
      </ModalPortal>
    </React.Fragment>
  );
}