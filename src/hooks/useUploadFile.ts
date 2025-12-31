import { AxiosProgressEvent } from "axios";
import { useState } from "react";
import { api } from "../lib/apiClient";

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

            const res = await api.post(`${props.url}`, formData, {
                withCredentials: true,
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