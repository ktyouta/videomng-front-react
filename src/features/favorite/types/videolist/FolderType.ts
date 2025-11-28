export type FolderType = {
    name: string;
    userId: number;
    createDate: Date;
    updateDate: Date;
    folderId: number;
    latestVideoId: string,
    thumbnails?: {
        readonly default: {
            url: string;
            width: number;
            height: number;
        };
        readonly medium?: {
            url: string;
            width: number;
            height: number;
        } | undefined;
        readonly high?: {
            url: string;
            width: number;
            height: number;
        } | undefined;
    };
}