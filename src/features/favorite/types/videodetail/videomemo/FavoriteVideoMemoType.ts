// お気に入り動画メモの型
export type FavoriteVideoMemoType = {
    readonly userId: number,
    readonly videoId: string,
    videoMemoSeq: number,
    videoMemo: string,
    readonly createDate: Date,
    updateDate: Date,
}