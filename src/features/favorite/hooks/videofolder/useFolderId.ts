import { useParams } from "react-router-dom";

export function useFolderId() {

    // フォルダID
    const { folderId } = useParams<{ folderId: string }>();

    if (!folderId) {
        throw Error(`フォルダIDが存在しません。`);
    }

    return folderId;
}