import axios, { AxiosProgressEvent } from "axios";

type propsType = {
    url: string,
    fileData: File,
    onUploadProgress?: ((progressEvent: AxiosProgressEvent) => void),
}

export async function uploadFile(props: propsType) {

    const formData = new FormData();
    formData.append("file", props.fileData);

    return await axios.post(`${props.url}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: props.onUploadProgress,
    });
}