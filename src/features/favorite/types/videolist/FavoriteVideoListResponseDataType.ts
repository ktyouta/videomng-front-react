import { FavoriteVideoListMergedType } from "../FavoriteVideoListMergedType";
import { FolderType } from "./FolderType";

// お気に入り動画リストapiのレスポンスデータ部
export type FavoriteVideoListResponseDataType = {
    item: FavoriteVideoListMergedType[],
    total: number,
    page: number,
    folder: FolderType[],
}