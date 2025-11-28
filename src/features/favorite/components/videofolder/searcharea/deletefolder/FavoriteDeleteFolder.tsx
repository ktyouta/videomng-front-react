import React from "react";
import { IconComponent } from "../../../../../../components/IconComponent";
import { RxCross1 } from 'react-icons/rx';
import styled from "styled-components";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { Checkbox } from "../../../../../../components/Checkbox";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { useFavoriteDeleteFolder } from "../../../../hooks/videofolder/searcharea/deletefolder/useFavoriteDeleteFolder";


const Parent = styled.div`
  box-sizing:border-box;
  padding-top:1%;
  height:100%;
  font-size: 12px;

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
    margin-top: 25px;
`;

const InputArea = styled.div`
    padding: 0 5%;
    box-sizing: border-box;
    margin: 30px 0px 30px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const SelectLabel = styled.label`
    color: black;
`;

const FooterDiv = styled.div`
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    color: black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:1%;
`;

type propsType = {
  close: () => void,
}

export function FavoriteDeleteFolder(props: propsType) {

  console.log("FavoriteDeleteFolder render");

  const {
    execute,
    deleteVideoFlg,
    changeSelect, } = useFavoriteDeleteFolder({ ...props });

  return (
    <Parent>
      <MessageArea>
        ！フォルダを削除します
      </MessageArea>
      <InputArea>
        <Checkbox
          value={"1"}
          htmlForId="delete-folder-check-id"
          onChange={changeSelect}
          isChecked={deleteVideoFlg === "1"}
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
      <FooterDiv >
        <ButtonComponent
          variant="black"
          shape="rounded"
          onClick={props.close}
        >
          キャンセル
        </ButtonComponent>
        <ButtonComponent
          variant="black"
          shape="rounded"
          onClick={execute}
          style={{
            marginLeft: "5%",
          }}
        >
          削除
        </ButtonComponent>
      </FooterDiv>
    </Parent>
  );
}