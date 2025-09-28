import { useState } from "react";
import { toast } from "react-toastify";
import { VIDEO_MNG_PATH } from "../../../../../../Common/Const/CommonConst";
import ENV from "../../../../../../env.json";
import { AxiosProgressEvent } from "axios";
import { useUploadFile } from "../../../../../../Common/Hook/useUploadFile";


export function useFavoriteSearchCsvExportMain() {

    // 選択したファイル
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    // 進捗率
    const [progress, setProgress] = useState(0);
    // ファイルアップロード用
    const { isLoading, upload } = useUploadFile({
        url: `${VIDEO_MNG_PATH}${ENV.FAVORITE_VIDEO_CSV_UPLOAD}`,
        // アップロード成功
        onSuccess: onSuccessUpload,
        // アップロード失敗
        onError: onErrorUpload,
        // アップロード中
        onUploadProgress: onUploadProgress,
    });
    // アップロード確認用モーダル表示フラグ
    const [isOpenConfirm, setIsOpenConfirm] = useState(false);

    /**
     * ファイル選択
     */
    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    /**
     * アップロード成功時処理
     */
    function onSuccessUpload() {
        toast.success(`お気に入り動画の登録が完了しました。`);
    }

    /**
     * アップロード失敗時処理
     */
    function onErrorUpload() {
        toast.error(`お気に入り動画の登録に失敗しました。`);
    }

    /**
     * アップロード中処理
     * @param progressEvent 
     * @returns 
     */
    function onUploadProgress(progressEvent: AxiosProgressEvent) {

        const percent = returnProgress(progressEvent);

        if (!percent) {
            return;
        }

        setProgress(percent);
    }

    /**
     * アップロード状況取得
     * @param progressEvent 
     */
    function returnProgress(progressEvent: AxiosProgressEvent) {

        if (!progressEvent.total) {
            return;
        }

        // 進捗率
        const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
        );

        return percent;
    }

    /**
     * CSVをアップロードする
     */
    async function uploadCsv() {

        if (!selectedFile) {
            toast.warn(`アップロードするファイルを選択してください。`);
            return;
        }

        // アップロード
        await upload(selectedFile);
    }

    /**
     * CSVアップロード確認モーダル表示
     */
    function openConfirmModal() {
        setIsOpenConfirm(true);
    }

    /**
     * CSVアップロード確認モーダル非表示
     */
    function closeConfirmModal() {
        setIsOpenConfirm(false);
    }

    return {
        selectedFile,
        handleFileChange,
        uploadCsv,
        progress,
        isLoading,
        isOpenConfirm,
        openConfirmModal,
        closeConfirmModal,
    }
}