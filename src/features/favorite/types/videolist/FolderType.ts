export type FolderType = {
    name: string;
    userId: number;
    createDate: Date;
    updateDate: Date;
    folderId: number;
    latestVideoId: string,
    folderColor: string,
    thumbnails?: {
        default: {
            url: string;
            width: number;
            height: number;
        };
        medium?: {
            url: string;
            width: number;
            height: number;
        } | undefined;
        high?: {
            url: string;
            width: number;
            height: number;
        } | undefined;
    };
}