// お気に入り動画更新リクエスト
export type UpdateToFavoriteVideoReqestType = {
    summary: string,
    viewStatus: string,
    category: string[],
    favoriteLevel: number,
}