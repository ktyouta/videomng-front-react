import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFavoriteDeleteFolderModal } from "../../../../hooks/videofolder/searcharea/deletefolder/useFavoriteDeleteFolderModal";
import { FolderMasterType } from "../../../../types/videolist/FolderMasterType";
import { FavoriteSearchActionButton } from "../../../FavoriteSearchActionButton";
import { FavoriteDeleteFolder } from "./FavoriteDeleteFolder";
import { FavoriteDeleteFolderConfirmModal } from "./FavoriteDeleteFolderConfirmModal";


type PropsType = {
    folder: FolderMasterType;
}

export function FavoriteDeleteFolderModal(props: PropsType) {

    console.log("FavoriteDeleteFolderModal render");

    const {
        isOpenModal,
        openDeleteModal,
        closeModal,
        isMobile,
        deleteVideoFlg,
        changeSelect,
        execute,
        clickDelete,
        isOpenConfirmModal,
        closeConfirmModal, } = useFavoriteDeleteFolderModal(props);

    return (
        <React.Fragment>
            <FavoriteSearchActionButton
                icon={FaRegTrashAlt}
                label="フォルダ削除"
                onClick={openDeleteModal}
            />
            {/* フォルダ削除確認モーダル（閉じている間は選択状態を保持しないため未マウントにする） */}
            {
                isOpenModal &&
                <FavoriteDeleteFolder
                    isOpen={isOpenModal}
                    close={closeModal}
                    deleteVideoFlg={deleteVideoFlg}
                    changeSelect={changeSelect}
                    clickDelete={clickDelete}
                    isMobile={isMobile}
                />
            }
            {
                isOpenConfirmModal &&
                // フォルダ削除最終確認モーダル
                <FavoriteDeleteFolderConfirmModal
                    isOpenModal={isOpenConfirmModal}
                    closeConfirmModal={closeConfirmModal}
                    execute={execute}
                />
            }
        </React.Fragment>
    );
}
