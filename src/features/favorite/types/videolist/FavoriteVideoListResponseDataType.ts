import { FavoriteVideoListMergedType } from "./FavoriteVideoListMergedType";

// お気に入り動画リストapiのレスポンスデータ部
export type FavoriteVideoListResponseDataType = {
    item: FavoriteVideoListMergedType[],
    total: number,
    page: number,
}