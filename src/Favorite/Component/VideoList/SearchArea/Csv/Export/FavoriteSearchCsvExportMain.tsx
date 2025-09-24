import styled from "styled-components";
import { FileUploadButton } from "../../../../../../Common/Component/FileUploadButton";

const Parent = styled.div`
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
`;

const UploadFileNameSpan = styled.span`
`;

type propsType = {
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    selectedFile: File | null
}

export function FavoriteSearchCsvExportMain(props: propsType) {

    console.log("FavoriteSearchCsvExportMain render");

    return (
        <Parent >
            CSVファイルを選択してアップロードボタンを押すと、動画IDをもとにお気に入りへ一括登録できます。 <br />
            CSVには動画タイトルなどの情報は含まれません。<br />
            登録済みの動画がある場合は重複して登録されません。<br />
            <UploadBtnArea>
                <FileUploadButton />
                <UploadFileNameSpan>
                    {props.selectedFile?.name}
                </UploadFileNameSpan>
            </UploadBtnArea>
        </Parent>
    );
}