import styled from "styled-components";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { Checkbox } from "../../../../../../components/Checkbox";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { DELETEFAVORITEVIDEOINFOLDER } from "../../../../const/FavoriteConst";


const Parent = styled.div`
  box-sizing:border-box;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  flex:1;

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

const MeainArea = styled.div`
    flex: 1;
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
    padding: 0 6%;
    box-sizing: border-box;
    margin: 30px 0px 0px 0px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const SelectLabel = styled.label`
    color: black;
`;

const FooterDiv = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    color: black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:1%;
`;

type propsType = {
  close: () => void,
  deleteVideoFlg: string,
  changeSelect: (value: string) => void,
  clickDelete: () => void,
}

export function FavoriteDeleteFolder(props: propsType) {

  console.log("FavoriteDeleteFolder render");

  return (
    <Parent>
      <MeainArea>
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
      </MeainArea>
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
          onClick={props.clickDelete}
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