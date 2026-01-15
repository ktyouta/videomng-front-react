import React from "react";
import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import BaseTextbox from "../../../../../../components/BaseTextbox";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { ColorPickerTwitter } from "../../../../../../components/ColorPickerTwitter";
import { IconComponent } from "../../../../../../components/IconComponent";
import { DEFAULT_FOLDER_COLOR } from "../../../../const/FavoriteConst";
import { useFavoriteCreateFolderMain } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderMain";


const MessageArea = styled.div`
    width: 100%;
    box-sizing: border-box;
    color: white;
    padding: 0 5%;
    line-height: 2.0;
    flex:1;
`;

const InputArea = styled.div`
    padding: 0 5%;
    box-sizing: border-box;
    margin: 30px 0px;
    display: flex;
    align-items: center;
    flex: 1;
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

export function FavoriteCreateFolderMain(props: propsType) {

    console.log("FavoriteCreateFolderMain render");

    const {
        execute,
        folderName,
        setFolderName,
        folderColor,
        setFolderColor,
        isPcLess, } = useFavoriteCreateFolderMain({ ...props });

    return (
        <React.Fragment>
            <MessageArea>
                フォルダ名を入力して「作成」ボタンを押すと、新しいフォルダを作成できます。<br />
                作成したフォルダはお気に入り一覧画面に表示されます。<br />
                お気に入りに登録した動画をドラッグ＆ドロップすると、フォルダに登録できます。<br />
                フォルダに登録した動画を一覧画面にも表示したい場合は、動画詳細画面の動画詳細設定メニューにある
                「フォルダ追加後も一覧に表示する」にチェックを入れてください。<br />
            </MessageArea>
            <InputArea>
                <InputTitleSpan>
                    フォルダ名：
                </InputTitleSpan>
                <BaseTextbox
                    value={folderName}
                    onChange={setFolderName}
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
                    width={isPcLess ? "90%" : "33%"}
                />
            </SelectColorDiv>
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
                    onClick={execute}
                    style={{
                        marginLeft: "5%",
                        color: "white",
                        background: "#3a3d42",
                    }}
                >
                    作成
                </ButtonComponent>
            </FooterDiv>
        </React.Fragment>
    );
}