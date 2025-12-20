import { FolderShareVideosResponseDataType } from "./FolderShareVideosResponseDataType";

export type FolderShareVideosResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: FolderShareVideosResponseDataType[],
}