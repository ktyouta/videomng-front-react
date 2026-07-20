import React from "react";
import { FaFolder } from 'react-icons/fa';
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { useFavoriteCreateFolderModal } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderModal";
import { FavoriteSearchActionButton } from "../FavoriteSearchActionButton";
import { FavoriteCreateFolderContainer } from "./FavoriteCreateFolderContainer";

/**
 * 検索条件エリア
 */
export function FavoriteCreateFolderModal() {

  console.log("FavoriteCreateFolderModal render");

  const {
    isOpenModal,
    openModal,
    closeModal,
    isMobile, } = useFavoriteCreateFolderModal();

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