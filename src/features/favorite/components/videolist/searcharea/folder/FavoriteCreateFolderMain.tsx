import styled from "styled-components";
import React from "react";
import { LinearProgress } from "@mui/material";
import ButtonComponent from "../../../../../../components/ButtonComponent";
import { ModalPortalConfirm } from "../../../../../../components/ModalPortalConfirm";
import { useFavoriteCreateFolderMain } from "../../../../hooks/videolist/searcharea/folder/useFavoriteCreateFolderMain";
import BaseTextbox from "../../../../../../components/BaseTextbox";

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
    margin: 30px 10px 30px 0;
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 10px;
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
}

export function FavoriteCreateFolderMain(props: propsType) {

    console.log("FavoriteCreateFolderMain render");

    const {
        execute,
        isOpenConfirm,
        openConfirmModal,
        closeConfirmModal,
        folderName,
        setFolderName, } = useFavoriteCreateFolderMain({ ...props });

    return (
        <React.Fragment>
            <MessageArea>
                フォルダ名を入力して「作成」ボタンを押すと、新しいフォルダを作成できます。<br />
                作成したフォルダはお気に入り一覧画面に表示されます。<br />
                お気に入りに登録した動画をドラッグ＆ドロップすると、フォルダに登録できます。<br />
                フォルダに登録した動画を一覧画面にも表示したい場合は、動画の詳細画面にある
                「フォルダ登録時も一覧に表示する」にチェックを入れてください。<br />
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
                    onClick={openConfirmModal}
                    style={{
                        marginLeft: "5%",
                        color: "white",
                        background: "#3a3d42",
                    }}
                >
                    作成
                </ButtonComponent>
            </FooterDiv>
            {
                // 確認用モーダル
                isOpenConfirm &&
                <ModalPortalConfirm
                    isOpenModal={isOpenConfirm}
                    closeModal={closeConfirmModal}
                    titleMessage={`フォルダを作成します。よろしいですか？`}
                    clickOk={execute}
                />
            }
        </React.Fragment>
    );
}