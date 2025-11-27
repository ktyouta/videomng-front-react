import styled from "styled-components";
import React from "react";
import { LinearProgress } from "@mui/material";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { ModalPortalConfirm } from "../../../../../../components/ModalPortalConfirm";
import { useFavoriteCreateFolderMain } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderMain";
import BaseTextbox from "../../../../../../components/BaseTextbox";
import { FolderType } from "../../../../types/videolist/FolderType";
import { useFavoriteDeleteFolderMain } from "../../../../hooks/videofolder/searcharea/deletefolder/useFavoriteDeleteFolderMain";
import { Checkbox } from "../../../../../../components/Checkbox";


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
    margin: 30px 0px 30px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const SelectLabel = styled.label`
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

type propsType = {
    close: () => void,
}

export function FavoriteDeleteFolderMain(props: propsType) {

    console.log("FavoriteDeleteFolderMain render");

    const {
        execute,
        deleteVideoFlg,
        changeSelect, } = useFavoriteDeleteFolderMain({ ...props });

    return (
        <React.Fragment>
            <MessageArea>
                ！フォルダを削除します
            </MessageArea>
            <InputArea>
                <Checkbox
                    value={"1"}
                    htmlForId="delete-folder-check-id"
                    onChange={changeSelect}
                    isChecked={deleteVideoFlg === "1"}
                />
                <SelectLabel
                    htmlFor="delete-folder-check-id"
                >
                    フォルダ内のお気に入り動画も削除する
                </SelectLabel>
            </InputArea>
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
                    削除
                </ButtonComponent>
            </FooterDiv>
        </React.Fragment>
    );
}