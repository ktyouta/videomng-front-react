// videomng-apiに登録されたお気に入り動画情報
export type FavoriteVideoTransactionType = {
    readonly userId: number,
    readonly videoId: string,
    readonly isVisibleAfterFolderAdd: string,
}