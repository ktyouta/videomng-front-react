import axios, { AxiosProgressEvent } from "axios";
import { useState } from "react";

type propsType = {
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,
    onSuccess?: (res: unknown) => void,
    onError?: (e: unknown) => void,
    url: string,
}

export function useUploadFile(props: propsType) {

    // ローディング
    const [isLoading, setIsLoading] = useState(false);

    /**
     * アップロード
     */
    async function upload(fileData: File) {

        setIsLoading(true);

        try {

            const formData = new FormData();
            formData.append("file", fileData);

            const res = await axios.post(`${props.url}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: props.onUploadProgress,
            });

            if (props.onSuccess) {
                props.onSuccess(res);
            }

            return res;
        }
        catch (e: unknown) {

            if (props.onError) {
                props.onError(e);
            }

            throw e;
        }
        finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        upload
    }
}