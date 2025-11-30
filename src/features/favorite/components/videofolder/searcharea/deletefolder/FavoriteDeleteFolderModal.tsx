import styled from "styled-components";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../../../components/IconComponent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteSearchFilterModal } from "../../../../hooks/videolist/searcharea/filter/useFavoriteSearchFilterModal";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { MdEdit } from "react-icons/md";
import { useFavoriteCreateFolderModal } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderModal";
import { minLength } from "zod";
import { Icon } from "../../../../../../components/Icon";
import { useFavoriteUpdateFolderModal } from "../../../../hooks/videofolder/searcharea/updatefolder/useFavoriteUpdateFolderModal";
import { FolderType } from "../../../../types/videolist/FolderType";
import { FaRegTrashAlt } from "react-icons/fa";
import { useFavoriteDeleteFolderModal } from "../../../../hooks/videofolder/searcharea/deletefolder/useFavoriteDeleteFolderModal";
import { FavoriteDeleteFolder } from "./FavoriteDeleteFolder";
import { ModalPortalConfirm } from "../../../../../../components/ModalPortalConfirm";


const TitleSpan = styled.span`
  color: #9e9e9e;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
  white-space: nowrap;
  margin-right: 30px;
`;


export function FavoriteDeleteFolderModal() {

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
        closeConfirmModal, } = useFavoriteDeleteFolderModal();


    return (
        <React.Fragment>
            <Icon
                icon={FaRegTrashAlt}
                bgColor="rgb(158, 158, 158)"
                style={{
                    marginRight: `10px`,
                }}
                width="20px"
                height="100%"
                onclick={openDeleteModal}
            />
            {
                !isMobile &&
                <TitleSpan
                    onClick={openDeleteModal}
                >
                    フォルダ削除
                </TitleSpan>
            }
            {/* フォルダ削除確認モーダル */}
            <ModalPortal
                isOpen={isOpenModal}
                modalWidth={isMobile ? `80%` : `45%`}
                modalHeight=""
                isCloseOuter={true}
                close={closeModal}
                containerStyle={{
                    backgroundColor: "#e0e0e0",
                    borderRadius: "20px",
                    border: "solid 1px",
                    color: "black",
                    minHeight: "30%"
                }}
            >
                <FavoriteDeleteFolder
                    close={closeModal}
                    deleteVideoFlg={deleteVideoFlg}
                    changeSelect={changeSelect}
                    clickDelete={clickDelete}
                />
            </ModalPortal>
            {/* フォルダ削除最終確認モーダル */}
            <ModalPortalConfirm
                isOpenModal={isOpenConfirmModal}
                closeModal={closeConfirmModal}
                titleMessage={<React.Fragment>
                    「フォルダ内の動画をお気に入りから削除する」が有効です。<br />このフォルダを削除すると、お気に入り一覧からも動画が削除されます。削除してもよろしいですか？
                </React.Fragment>}
                clickOk={execute}
            />
        </React.Fragment>
    );
}