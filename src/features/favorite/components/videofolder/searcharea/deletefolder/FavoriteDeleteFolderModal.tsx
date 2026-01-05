import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import { Icon } from "../../../../../../components/Icon";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteDeleteFolderModal } from "../../../../hooks/videofolder/searcharea/deletefolder/useFavoriteDeleteFolderModal";
import { FavoriteDeleteFolder } from "./FavoriteDeleteFolder";
import { FavoriteDeleteFolderConfirmModal } from "./FavoriteDeleteFolderConfirmModal";


const TitleSpan = styled.span`
  color: #9e9e9e;
  &:hover {
    cursor: pointer;
  }
  white-space: nowrap;
  margin-right: 40px;
  font-size: 12px;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 12px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 14px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 14px;
  }
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
            <TitleSpan
                onClick={openDeleteModal}
            >
                フォルダ削除
            </TitleSpan>
            {/* フォルダ削除確認モーダル */}
            <ModalPortal
                isOpen={isOpenModal}
                modalWidth={isMobile ? `80%` : `45%`}
                modalMinHeight="25%"
                isCloseOuter={true}
                close={closeModal}
                containerStyle={{
                    backgroundColor: "#e0e0e0",
                    borderRadius: "20px",
                    border: "solid 1px",
                    color: "black",
                    minHeight: "23%"
                }}
            >
                <FavoriteDeleteFolder
                    close={closeModal}
                    deleteVideoFlg={deleteVideoFlg}
                    changeSelect={changeSelect}
                    clickDelete={clickDelete}
                />
            </ModalPortal>
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