import styled from "styled-components";
import React from "react";
import { LinearProgress } from "@mui/material";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { ModalPortalConfirm } from "../../../../../../components/ModalPortalConfirm";
import { useFavoriteCreateFolderMain } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderMain";
import BaseTextbox from "../../../../../../components/BaseTextbox";
import { useFavoriteUpdateFolderMain } from "../../../../hooks/videofolder/searcharea/updatefolder/useFavoriteUpdateFolderMain";
import { FolderType } from "../../../../types/videolist/FolderType";


const InputArea = styled.div`
    padding: 0 5%;
    box-sizing: border-box;
    margin: 30px 0px 75px 10px;
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

type propsType = {
    close: () => void,
    folder: FolderType,
}

export function FavoriteUpdateFolderMain(props: propsType) {

    console.log("FavoriteUpdateFolderMain render");

    const {
        execute,
        folderName,
        setFolderName, } = useFavoriteUpdateFolderMain({ ...props });

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