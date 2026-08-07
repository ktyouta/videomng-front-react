import React from "react";
import { FaFolder } from 'react-icons/fa';
import { useFavoriteCreateFolderModal } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderModal";
import { FavoriteSearchActionButton } from "../../../FavoriteSearchActionButton";
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