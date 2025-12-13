import React from "react";
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import { Icon } from "../../../../../../components/Icon";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { useFavoriteUpdateFolderModal } from "../../../../hooks/videofolder/searcharea/updatefolder/useFavoriteUpdateFolderModal";
import { FolderType } from "../../../../types/videolist/FolderType";
import { FavoriteUpdateFolder } from "./FavoriteUpdateFolder";


const TitleSpan = styled.span`
  color: #9e9e9e;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
  white-space: nowrap;
  margin-right: 30px;
`;

type propsType = {
    folder: FolderType
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
            <Icon
                icon={MdEdit}
                bgColor="rgb(158, 158, 158)"
                style={{
                    marginRight: `10px`,
                }}
                width="20px"
                height="100%"
                onclick={openModal}
            />
            <TitleSpan
                onClick={openModal}
            >
                フォルダ情報更新
            </TitleSpan>
            {/* フォルダ名変更モーダル */}
            <ModalPortal
                isOpen={isOpenModal}
                modalWidth={isMobile ? `80%` : `45%`}
                modalHeight=""
                isCloseOuter={true}
                close={closeModal}
                containerStyle={{
                    minHeight: "35%"
                }}
            >
                <FavoriteUpdateFolder
                    folder={props.folder}
                    close={closeModal}
                />
            </ModalPortal>
        </React.Fragment>
    );
}