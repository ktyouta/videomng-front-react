import { FavoriteVideoMemoType } from "./FavoriteVideoMemoType";

// お気に入り登録動画メモレスポンス
export type AddToFavoriteVideoMemoResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoMemoType,
}