import React from "react";
import styled from "styled-components";
import { ModalPortalConfirm } from "../../../../../../components/ModalPortalConfirm";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { useFavoriteDeleteFolderConfirmModal } from "../../../../hooks/videofolder/searcharea/deletefolder/useFavoriteDeleteFolderConfirmModal";


const MessageSpan = styled.span`
  color: red;
  display: inline-block;
  font-weight: bold;
  margin-top: 23px;
  margin-bottom: 7px;
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

type propsType = {
  isOpenModal: boolean,
  closeConfirmModal: () => void,
  execute: () => void,
}

export function FavoriteDeleteFolderConfirmModal(props: propsType) {

  console.log("FavoriteDeleteFolderConfirmModal render");

  const { data, isLoading } = useFavoriteDeleteFolderConfirmModal();

  return (
    // フォルダ削除最終確認モーダル
    <ModalPortalConfirm
      isOpenModal={props.isOpenModal}
      closeModal={props.closeConfirmModal}
      titleMessage={
        !isLoading &&
        <React.Fragment>
          「フォルダ内の動画をお気に入りから削除する」が有効です。<br />
          このフォルダを削除すると、お気に入り一覧からも動画が削除されます。
          {
            data && data.length > 0 &&
            <React.Fragment>
              <br />
              <MessageSpan>
                ※別のフォルダにも登録されている動画が含まれています。
              </MessageSpan>
            </React.Fragment>
          }
          <br />
          削除すると元に戻せません。削除してもよろしいですか？
        </React.Fragment>
      }
      clickOk={props.execute}
    />
  );
}