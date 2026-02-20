import { FolderMasterType } from "./FolderMasterType";

export type FolderResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: FolderMasterType[],
}