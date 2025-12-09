import React from "react";
import { FaFolder } from 'react-icons/fa';
import styled from "styled-components";
import BaseTextbox from "../../../../../../components/BaseTextbox";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { ColorPickerTwitter } from "../../../../../../components/ColorPickerTwitter";
import { IconComponent } from "../../../../../../components/IconComponent";
import { DEFAULT_FOLDER_COLOR } from "../../../../const/FavoriteConst";
import { useFavoriteUpdateFolderMain } from "../../../../hooks/videofolder/searcharea/updatefolder/useFavoriteUpdateFolderMain";
import { FolderType } from "../../../../types/videolist/FolderType";


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
    close: () => void,
    folder: FolderType,
}

export function FavoriteUpdateFolderMain(props: propsType) {

    console.log("FavoriteUpdateFolderMain render");

    const {
        execute,
        folderName,
        setFolderName,
        folderColor,
        setFolderColor, } = useFavoriteUpdateFolderMain({ ...props });

    return (
        <React.Fragment>
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
                    width="33%"
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
                    変更
                </ButtonComponent>
            </FooterDiv>
        </React.Fragment>
    );
}