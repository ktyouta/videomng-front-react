import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { Checkbox } from "../../../../../../components/Checkbox";
import { ModalBody, ModalFooter, ModalHeader } from "../../../../../../components/ModalLayout";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { DELETEFAVORITEVIDEOINFOLDER } from "../../../../const/FavoriteConst";


const Parent = styled.div`
  box-sizing:border-box;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  flex:1;
  min-height: 0;

  @media (min-width: ${MEDIA.TABLET}) and (orientation: portrait) {
    font-size: 13px;
  }

  @media (min-width: ${MEDIA.TABLET}) and (orientation: landscape) {
    font-size: 16px;
  }

  @media (min-width: ${MEDIA.PC}) {
    font-size: 16px;
  }
`;

const MessageArea = styled.div`
    width: 100%;
    box-sizing: border-box;
    color: black;
    padding: 0 5%;
    line-height: 2.0;
`;

const InputArea = styled.div`
    padding: 0 6%;
    box-sizing: border-box;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const SelectLabel = styled.label`
    color: black;
`;

type propsType = {
  close: () => void,
  deleteVideoFlg: string,
  changeSelect: (value: string) => void,
  clickDelete: () => void,
  isMobile: boolean,
}

export function FavoriteDeleteFolder(props: propsType) {

  console.log("FavoriteDeleteFolder render");

  return (
    <Parent>
      <ModalHeader theme="light" icon={FaRegTrashAlt}>
        フォルダ削除
      </ModalHeader>
      <ModalBody theme="light">
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
      </ModalBody>
      <ModalFooter theme="light">
        <ButtonComponent
          variant="black"
          shape="rounded"
          size={props.isMobile ? "small" : "medium"}
          onClick={props.close}
        >
          キャンセル
        </ButtonComponent>
        <ButtonComponent
          variant="black"
          shape="rounded"
          size={props.isMobile ? "small" : "medium"}
          onClick={props.clickDelete}
        >
          削除
        </ButtonComponent>
      </ModalFooter>
    </Parent>
  );
}
