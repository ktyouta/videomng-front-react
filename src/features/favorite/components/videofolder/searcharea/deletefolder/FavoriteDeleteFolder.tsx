import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { Checkbox } from "../../../../../../components/Checkbox";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { CONFIRM_MODAL_CONTAINER_STYLE } from "../../../../../../components/ModalPortalConfirm";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { DELETEFAVORITEVIDEOINFOLDER } from "../../../../const/FavoriteConst";


const MessageArea = styled.div`
    width: 100%;
    box-sizing: border-box;
    color: black;
    font-weight: 600;
    padding: 0 5%;
    line-height: 2.0;
`;

const InputArea = styled.div`
    padding: 0 6%;
    box-sizing: border-box;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
      margin-top: 15px;
    }

    @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
      margin-top: 15px;
    }

    @media (min-width: ${MEDIA.PC}) {
      margin-top: 15px;
    }
`;

const SelectLabel = styled.label`
    color: black;
`;

type propsType = {
  isOpen: boolean,
  close: () => void,
  deleteVideoFlg: string,
  changeSelect: (value: string) => void,
  clickDelete: () => void,
  isMobile: boolean,
}

export function FavoriteDeleteFolder(props: propsType) {

  console.log("FavoriteDeleteFolder render");

  return (
    <ModalPortal
      isOpen={props.isOpen}
      modalWidth={props.isMobile ? "93%" : "45%"}
      isCloseOuter={true}
      close={props.close}
      containerStyle={CONFIRM_MODAL_CONTAINER_STYLE}
      theme="light"
      title="フォルダ削除"
      titleIcon={FaRegTrashAlt}
      footer={
        <>
          <ButtonComponent
            variant="black"
            shape="rounded"
            size={props.isMobile ? "small" : "medium"}
            onClick={props.close}
          >
            キャンセル
          </ButtonComponent>
          <ButtonComponent
            variant="red"
            shape="rounded"
            size={props.isMobile ? "small" : "medium"}
            onClick={props.clickDelete}
          >
            削除
          </ButtonComponent>
        </>
      }
    >
      <MessageArea>
        ！フォルダを削除します
      </MessageArea>
      <InputArea>
        <Checkbox
          value={DELETEFAVORITEVIDEOINFOLDER.ON}
          htmlForId="delete-folder-check-id"
          onChange={props.changeSelect}
          isChecked={props.deleteVideoFlg === DELETEFAVORITEVIDEOINFOLDER.ON}
          style={{
            transform: `scale(1.2)`
          }}
        />
        <SelectLabel
          htmlFor="delete-folder-check-id"
        >
          フォルダ内の動画をお気に入りから削除する
        </SelectLabel>
      </InputArea>
    </ModalPortal>
  );
}
