import React from "react";
import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import { IconComponent } from "../../../../../../components/IconComponent";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteCreateFolderModal } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderModal";
import { FavoriteCreateFolderContainer } from "./FavoriteCreateFolderContainer";

const IconAreaDiv = styled.div`
  width: 46px;
  height: 99%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 15%;
  border-bottom-right-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#9e9e9e;
`;

const TitleSpan = styled.span`
  color: #9e9e9e;
  &:hover {
    cursor: pointer;
  }
  white-space: nowrap;
  margin-right: 1%;
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
      <IconAreaDiv>
        <IconComponent
          icon={FaFolder}
          onclick={openModal}
          size="40%"
        />
      </IconAreaDiv>
      <TitleSpan
        onClick={openModal}
      >
        フォルダ作成
      </TitleSpan>
      {/* フォルダ作成モーダル */}
      <ModalPortal
        isOpen={isOpenModal}
        modalWidth={isMobile ? `80%` : `45%`}
        modalMinHeight=""
        isCloseOuter={true}
        close={closeModal}
        containerStyle={{
          minHeight: "55%"
        }}
      >
        <FavoriteCreateFolderContainer
          close={closeModal}
        />
      </ModalPortal>
    </React.Fragment>
  );
}