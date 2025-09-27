import styled from "styled-components";
import { FileUploadButton } from "../../../../../../Common/Component/FileUploadButton";
import { useFavoriteSearchCsvExportMain } from "../../../../../Hook/VideoList/SearchArea/Csv/Export/useFavoriteSearchCsvExportMain";
import React from "react";
import ButtonComponent from "../../../../../../Common/Component/ButtonComponent";
import { LinearProgress } from "@mui/material";

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
        isLoading } = useFavoriteSearchCsvExportMain();

    return (
        <React.Fragment>
            <MessageArea>
                CSVファイルを選択してアップロードボタンを押すと、動画IDをもとにお気に入りへ一括登録できます。 <br />
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
                    styleTypeNumber="RUN"
                    title={"キャンセル"}
                    onclick={props.close}
                    style={{
                        borderRadius: "23px",
                        background: "#3a3d42",
                        fontSize: "1rem",
                    }}
                />
                <ButtonComponent
                    styleTypeNumber="RUN"
                    title={"アップロード"}
                    onclick={uploadCsv}
                    style={{
                        borderRadius: "23px",
                        background: isLoading ? "#2c2f33" : "#3a3d42",
                        fontSize: "1rem",
                        marginLeft: "5%",
                    }}
                    disabled={isLoading}
                />
            </FooterDiv>
        </React.Fragment>
    );
}