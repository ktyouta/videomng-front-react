import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteAddTagModal } from "../../../../hooks/videodetail/videotag/addtag/useFavoriteAddTagModal";
import { FavoriteAddTag } from "./FavoriteAddTag";

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
export function FavoriteAddTagModal() {

  console.log("FavoriteAddTagModal render");

  const {
    isOpenModal,
    openModal,
    closeModal,
    isMobile, } = useFavoriteAddTagModal();


  return (
    <React.Fragment>
      <ButtonComponent
        variant="base"
        onClick={openModal}
        size={isMobile ? "small" : "medium"}
        style={{
          boxShadow: "none",
          backgroundColor: "rgb(41, 50, 60)",
          color: "white",
          ...isMobile ? {
            padding: "8px 14px",
            fontSize: "10px",
          } : {}
        }}
      >
        タグを追加
      </ButtonComponent>
      {/* タグ追加モーダル */}
      <ModalPortal
        isOpen={isOpenModal}
        modalWidth={isMobile ? `80%` : `45%`}
        modalMinHeight=""
        isCloseOuter={true}
        close={closeModal}
        containerStyle={{
          minHeight: "43%"
        }}
      >
        <FavoriteAddTag
          close={closeModal}
        />
      </ModalPortal>
    </React.Fragment>
  );
}