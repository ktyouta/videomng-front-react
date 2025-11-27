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
        openModal,
        closeModal,
        isMobile, } = useFavoriteDeleteFolderModal();


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
            />
            {
                !isMobile &&
                <TitleSpan
                    onClick={openModal}
                >
                    フォルダ削除
                </TitleSpan>
            }
        </React.Fragment>
    );
}