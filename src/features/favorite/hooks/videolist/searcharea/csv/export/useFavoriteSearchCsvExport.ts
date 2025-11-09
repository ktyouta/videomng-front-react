import { useState } from "react";

export function useFavoriteSearchCsvExport() {

    // 選択したファイル
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    /**
     * ファイル選択
     */
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    return {
        selectedFile,
        handleFileChange
    }
}