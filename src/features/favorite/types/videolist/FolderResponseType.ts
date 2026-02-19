import { FolderType } from "./FolderType";

export type FolderResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: FolderType[],
}