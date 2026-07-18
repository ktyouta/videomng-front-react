// お気に入り登録リクエスト
export type AddToFavoriteRequestType = {
    videoId: string,
    tagList?: number[],
    folderId?: number,
}