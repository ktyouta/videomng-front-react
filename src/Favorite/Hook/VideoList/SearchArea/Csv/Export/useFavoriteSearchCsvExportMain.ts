import { useState } from "react";
import { getNowDatetime } from "../../../../../../Common/Function/DateUtil";
import { uploadFile } from "../../../../../../Common/Function/uploadFile";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../../../Common/Const/CommonConst";
import ENV from "../../../../../../env.json";

type propsType = {
    close: () => void;
}

export function useFavoriteSearchCsvExportMain(props: propsType) {

    // 選択したファイル
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    /**
     * ファイル選択
     */
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    /**
     * CSVをアップロードする
     */
    async function upload() {

        if (!selectedFile) {
            toast.error(`アップロードするファイルを選択してください。`);
            return;
        }

        alert(`実装中`);

        // アップロード
        // const res = await uploadFile({
        //     url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_CSV_UPLOAD}`,
        //     fileData: selectedFile,
        // });

        props.close();
    }

    return {
        selectedFile,
        handleFileChange,
        upload
    }
}