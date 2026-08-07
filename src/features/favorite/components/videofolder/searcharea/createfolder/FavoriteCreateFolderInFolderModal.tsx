import React from "react";
import { FaFolder } from 'react-icons/fa';
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
      {/* フォルダ作成モーダル（閉じている間は入力状態を保持しないため未マウントにする） */}
      {
        isOpenModal &&
        <FavoriteCreateFolderContainer
          isOpen={isOpenModal}
          close={closeModal}
          isMobile={isMobile}
        />
      }
    </React.Fragment>
  );
}
