import styled from "styled-components";
import { FileUploadButton } from "../../../../../../../components/FileUploadButton";
import { useFavoriteSearchCsvExportMain } from "../../../../../hooks/videolist/searcharea/csv/export/useFavoriteSearchCsvExportMain";
import React from "react";
import ButtonComponent from "../../../../../../../components/ButtonComponent";
import { LinearProgress } from "@mui/material";
import { ModalPortalConfirm } from "../../../../../../../components/ModalPortalConfirm";

const MessageArea = styled.div`
    width: 100%;
    box-sizing: border-box;
    color: white;
    padding: 0 5%;
    line-height: 2.0;
    flex:1;
`;

const UploadBtnArea = styled.div`
    margin-top: 25px;
    display:flex;
    align-items: center;
    margin-bottom: 29px;
`;

const ProgressArea = styled.div`
    margin-bottom: 27px;
`;

const ProgressMesageDiv = styled.div`
    margin-bottom: 3px;
    font-size: 13px;
    color: #4FC3F7;
`;

const UploadFileNameSpan = styled.span`
    margin-left: 11px;
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

export function FavoriteSearchCsvExportMain(props: propsType) {

    console.log("FavoriteSearchCsvExportMain render");

    const {
        selectedFile,
        handleFileChange,
        uploadCsv,
        progress,
        isLoading,
        isOpenConfirm,
        openConfirmModal,
        closeConfirmModal, } = useFavoriteSearchCsvExportMain();

    return (
        <React.Fragment>
            <MessageArea>
                お気に入りのインポートでダウンロードしたCSVファイルを選択してアップロードボタンを押すと、動画IDをもとにお気に入りへ一括登録できます。 <br />
                CSVには動画タイトルなどの情報は含まれません。<br />
                登録済みの動画がある場合は重複して登録されません。<br />
                <UploadBtnArea>
                    <FileUploadButton
                        onClick={handleFileChange}
                        selectFileType=".csv"
                    />
                    <UploadFileNameSpan>
                        {selectedFile?.name}
                    </UploadFileNameSpan>
                </UploadBtnArea>
                {
                    progress > 0 &&
                    <ProgressArea>
                        <ProgressMesageDiv>
                            {`CSVファイル送信中：${progress}%`}
                        </ProgressMesageDiv>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                        />
                    </ProgressArea>
                }
            </MessageArea>
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
                        background: isLoading ? "#2c2f33" : "#3a3d42",
                        marginLeft: "5%",
                        color: "white"
                    }}
                    disabled={isLoading}
                >
                    アップロード
                </ButtonComponent>
            </FooterDiv>
            {
                // アップロード確認用モーダル
                isOpenConfirm &&
                <ModalPortalConfirm
                    isOpenModal={isOpenConfirm}
                    closeModal={closeConfirmModal}
                    titleMessage={`アップロードします。よろしいですか？`}
                    clickOk={uploadCsv}
                />
            }
        </React.Fragment>
    );
}