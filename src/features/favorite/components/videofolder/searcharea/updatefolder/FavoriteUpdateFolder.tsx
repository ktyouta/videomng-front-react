import { FaFolder } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import styled from "styled-components";
import BaseTextbox from "../../../../../../components/BaseTextbox";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { ColorPickerTwitter } from "../../../../../../components/ColorPickerTwitter";
import { IconComponent } from "../../../../../../components/IconComponent";
import { ModalPortal } from "../../../../../../components/ModalPortal";
import { DEFAULT_FOLDER_COLOR } from "../../../../const/FavoriteConst";
import { useFavoriteUpdateFolderMain } from "../../../../hooks/videofolder/searcharea/updatefolder/useFavoriteUpdateFolderMain";
import { FolderMasterType } from "../../../../types/videolist/FolderMasterType";


const MainArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputArea = styled.div`
    padding: 0 5%;
    box-sizing: border-box;
    margin: 30px 0px 75px 0;
    display: flex;
    align-items: center;
`;

const InputTitleSpan = styled.span`
    color: white;
`;

const SelectColorTitleDiv = styled.div`
    color: white;
`;

const SelectColorDiv = styled.div`
    padding-left: 5%;
    margin-bottom: 15px;
`;

const ColorHeader = styled.div`
    padding-right: 5%;
    margin-bottom: 11px;
    color: white;
`;

const SelectedColor = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
`;

const DefaultColorLink = styled.span`
    color: #7abaff;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

type propsType = {
  isOpen: boolean,
  close: () => void,
  folder: FolderMasterType,
  isMobile: boolean,
}

export function FavoriteUpdateFolder(props: propsType) {

  console.log("FavoriteUpdateFolder render");

  const {
    execute,
    folderName,
    setFolderName,
    folderColor,
    setFolderColor, } = useFavoriteUpdateFolderMain({ ...props });

  return (
    <ModalPortal
      isOpen={props.isOpen}
      modalWidth={props.isMobile ? "93%" : "45%"}
      modalMinHeight="35%"
      isCloseOuter={true}
      close={props.close}
      title="フォルダ名変更"
      titleIcon={MdEdit}
      footer={
        <>
          <ButtonComponent
            shape="rounded"
            size={props.isMobile ? "small" : "medium"}
            onClick={props.close}
            style={{
              background: "#3a3d42",
              color: "white"
            }}
          >
            キャンセル
          </ButtonComponent>
          <ButtonComponent
            shape="rounded"
            size={props.isMobile ? "small" : "medium"}
            onClick={execute}
            style={{
              color: "white",
              background: "#3a3d42",
            }}
          >
            変更
          </ButtonComponent>
        </>
      }
    >
      <MainArea>
        <InputArea>
          <InputTitleSpan>
            フォルダ名：
          </InputTitleSpan>
          <BaseTextbox
            value={folderName}
            onChange={setFolderName}
            height={props.isMobile ? "28px" : undefined}
            style={{
              flex: "1",
              marginLeft: "10px"
            }}
          />
        </InputArea>
        <SelectColorDiv>
          <ColorHeader>
            <SelectedColor>
              <SelectColorTitleDiv>
                選択中のフォルダカラー
              </SelectColorTitleDiv>
              {/* プレビュー */}
              <IconComponent
                icon={FaFolder}
                bgColor={folderColor}
                size="35px"
              />
            </SelectedColor>
            <DefaultColorLink
              onClick={() => {
                setFolderColor(DEFAULT_FOLDER_COLOR)
              }}>
              デフォルトカラーを使う
            </DefaultColorLink>
          </ColorHeader>
          {/* カラーピッカー */}
          <ColorPickerTwitter
            color={folderColor}
            changeColor={setFolderColor}
            triangle="hide"
            width="33%"
          />
        </SelectColorDiv>
      </MainArea>
    </ModalPortal>
  );
}
