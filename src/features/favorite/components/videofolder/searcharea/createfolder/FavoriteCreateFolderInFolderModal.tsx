import React from "react";
import { FaFolder } from 'react-icons/fa';
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { useFavoriteCreateFolderInFolderModal } from "../../../../hooks/videofolder/searcharea/createfolder/useFavoriteCreateFolderInFolderModal";
import { FavoriteSearchActionButton } from "../../../FavoriteSearchActionButton";
import { FavoriteCreateFolderContainer } from "./FavoriteCreateFolderContainer";

/**
 * 検索条件エリア
 */
export function FavoriteCreateFolderInFolderModal() {

  console.log("FavoriteCreateFolderInFolderModal render");

  const {
    isOpenModal,
    openModal,
    closeModal,
    isMobile, } = useFavoriteCreateFolderInFolderModal();

  return (
    <React.Fragment>
      <FavoriteSearchActionButton
        icon={FaFolder}
        label="フォルダ作成"
        onClick={openModal}
      />
      {/* フォルダ作成モーダル */}
      <ModalPortal
        isOpen={isOpenModal}
        modalWidth={isMobile ? `93%` : `45%`}
        modalMinHeight=""
        isCloseOuter={true}
        close={closeModal}
        containerStyle={{
          minHeight: "55%"
        }}
      >
        <FavoriteCreateFolderContainer
          close={closeModal}
          isMobile={isMobile}
        />
      </ModalPortal>
    </React.Fragment>
  );
}
