import styled from "styled-components";
import React from "react";
import { FaFilter } from 'react-icons/fa';
import { IconComponent } from "../../../../../../components/IconComponent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteSearchFilterModal } from "../../../../hooks/videolist/searcharea/filter/useFavoriteSearchFilterModal";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { FavoriteUpdateFolder } from "./FavoriteUpdateFolder";
import { MdEdit } from "react-icons/md";
import { useFavoriteCreateFolderModal } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderModal";
import { minLength } from "zod";
import { Icon } from "../../../../../../components/Icon";
import { useFavoriteUpdateFolderModal } from "../../../../hooks/videofolder/searcharea/updatefolder/useFavoriteUpdateFolderModal";
import { FolderType } from "../../../../types/videolist/FolderType";


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
            />
            {
                !isMobile &&
                <TitleSpan
                    onClick={openModal}
                >
                    フォルダ名変更
                </TitleSpan>
            }
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