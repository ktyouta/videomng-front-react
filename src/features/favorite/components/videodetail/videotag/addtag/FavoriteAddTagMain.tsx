import { FaSquare } from "react-icons/fa";
import styled from "styled-components";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { ColorPickerTwitter } from "../../../../../../components/ColorPickerTwitter";
import { IconComponent } from "../../../../../../components/IconComponent";
import { SuggestTextbox } from "../../../../../../components/SuggestTextbox";
import TagButtonComponent from "../../../../../../components/TagButtonComponent";
import { DEFAULT_FOLDER_COLOR } from "../../../../const/FavoriteConst";
import { useFavoriteAddTagMain } from "../../../../hooks/videodetail/videotag/addtag/useFavoriteAddTagMain";

const Parent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
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

const FooterDiv = styled.div`
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:1%;
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
    close: () => void,
}

export function FavoriteAddTagMain(props: propsType) {

    console.log("FavoriteAddTagMain render");

    const {
        tagName,
        setTagName,
        tagColor,
        setTagColor,
        addTag,
        tagMasterList, } = useFavoriteAddTagMain({ ...props });

    return (
        <Parent>
            <MainArea>
                <InputArea>
                    <InputTitleSpan>
                        タグ名：
                    </InputTitleSpan>
                    <SuggestTextbox
                        value={tagName}
                        onChange={setTagName}
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
                        width="33%"
                    />
                </SelectColorDiv>
            </MainArea>
            <FooterDiv >
                <ButtonComponent
                    shape="rounded"
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
                    onClick={() => {
                        addTag();
                    }}
                    style={{
                        marginLeft: "5%",
                        color: "white",
                        background: "#3a3d42",
                    }}
                >
                    追加
                </ButtonComponent>
            </FooterDiv>
        </Parent>
    );
}