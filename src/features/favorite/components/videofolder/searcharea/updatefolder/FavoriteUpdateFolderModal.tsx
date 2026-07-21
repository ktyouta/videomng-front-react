import React from "react";
import { MdEdit } from "react-icons/md";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { useFavoriteUpdateFolderModal } from "../../../../hooks/videofolder/searcharea/updatefolder/useFavoriteUpdateFolderModal";
import { FolderMasterType } from "../../../../types/videolist/FolderMasterType";
import { FavoriteSearchActionButton } from "../../../FavoriteSearchActionButton";
import { FavoriteUpdateFolder } from "./FavoriteUpdateFolder";


type propsType = {
    folder: FolderMasterType
}

export function FavoriteUpdateFolderModal(props: propsType) {

    console.log("FavoriteUpdateFolderModal render");

    const {
        isOpenModal,
        openModal,
        closeModal,
        isMobile, } = useFavoriteUpdateFolderModal();


    return (
        <React.Fragment>
            <FavoriteSearchActionButton
                icon={MdEdit}
                label="フォルダ情報更新"
                onClick={openModal}
            />
            {/* フォルダ名変更モーダル */}
            <ModalPortal
                isOpen={isOpenModal}
                modalWidth={isMobile ? `93%` : `45%`}
                modalMinHeight="35%"
                isCloseOuter={true}
                close={closeModal}
            >
                <FavoriteUpdateFolder
                    folder={props.folder}
                    close={closeModal}
                    isMobile={isMobile}
                />
            </ModalPortal>
        </React.Fragment>
    );
}
