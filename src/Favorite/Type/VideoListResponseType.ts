import { FavoriteVideoListMergedType } from "./FavoriteVideoListMergedType";

// お気に入り動画リストapiのレスポンス
export type FavoriteVideoListResponseType = {
    data: FavoriteVideoListMergedType[],
}