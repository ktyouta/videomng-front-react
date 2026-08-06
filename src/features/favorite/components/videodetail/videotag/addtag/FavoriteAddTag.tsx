import { FaSquare } from "react-icons/fa";
import styled from "styled-components";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { ColorPickerTwitter } from "../../../../../../components/ColorPickerTwitter";
import { IconComponent } from "../../../../../../components/IconComponent";
import { ModalBody, ModalFooter, ModalHeader } from "../../../../../../components/ModalLayout";
import { SuggestTextbox } from "../../../../../../components/SuggestTextbox";
import TagButtonComponent from "../../../../../../components/TagButtonComponent";
import { MEDIA } from "../../../../../../consts/MediaConst";
import { DEFAULT_FOLDER_COLOR } from "../../../../const/FavoriteConst";
import { useFavoriteAddTagMain } from "../../../../hooks/videodetail/videotag/addtag/useFavoriteAddTagMain";


const Parent = styled.div`
  box-sizing:border-box;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
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

const MainArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputArea = styled.div`
    padding: 0 5%;
    box-sizing: border-box;
    margin: 30px 0px;
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
  close: () => void;
  isMobile: boolean;
}

export function FavoriteAddTag(props: propsType) {

  console.log("FavoriteAddTag render");

  const {
    tagName,
    setTagName,
    tagColor,
    setTagColor,
    addTag,
    tagMasterList,
    isPcLess, } = useFavoriteAddTagMain({ ...props });

  return (
    <Parent>
      {/* タグ追加ヘッダ */}
      <ModalHeader>
        タグを追加
      </ModalHeader>
      {/* タグ追加コンテンツ */}
      <ModalBody>
        <MainArea>
          <InputArea>
            <InputTitleSpan>
              タグ名：
            </InputTitleSpan>
            <SuggestTextbox
              value={tagName}
              onChange={setTagName}
              size={props.isMobile ? "small" : "medium"}
              textboxStyle={{
                backgroundColor: `white`,
              }}
              containerStyle={{
                marginLeft: `10px`,
                flex: `1`,
                backgroundColor: `white`,
                border: `1px solid rgb(118, 118, 118)`,
                borderRadius: `5px`,
              }}
              options={tagMasterList ?? []}
            />
          </InputArea>
          <SelectColorDiv>
            <ColorHeader>
              <SelectedColor>
                <SelectColorTitleDiv>
                  選択中のタグカラー
                </SelectColorTitleDiv>
                {/* プレビュー */}
                {
                  tagName && tagName.trim()
                    ?
                    <TagButtonComponent
                      title={tagName}
                      btnStyle={{
                        marginRight: "15px"
                      }}
                      tagColor={tagColor}
                    />
                    :
                    <IconComponent
                      icon={FaSquare}
                      bgColor={tagColor}
                      size="35px"
                    />
                }
              </SelectedColor>
              <DefaultColorLink
                onClick={() => {
                  setTagColor(DEFAULT_FOLDER_COLOR)
                }}>
                デフォルトカラーを使う
              </DefaultColorLink>
            </ColorHeader>
            {/* カラーピッカー */}
            <ColorPickerTwitter
              color={tagColor}
              changeColor={setTagColor}
              triangle="hide"
              width={isPcLess ? "90%" : "33%"}
            />
          </SelectColorDiv>
        </MainArea>
      </ModalBody>
      <ModalFooter>
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
          onClick={() => {
            addTag();
          }}
          style={{
            color: "white",
            background: "#3a3d42",
          }}
        >
          追加
        </ButtonComponent>
      </ModalFooter>
    </Parent>
  );
}