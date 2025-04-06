import { FavoriteVideoDetailCategoryType } from "./FavoriteVideoDetailCategoryType";
import { FavoriteVideoVideoMngApiDataType } from "./FavoriteVideoVideoMngApiDataType";

export type UpdateFavoriteVideoResponseDataType = {
    readonly detail: FavoriteVideoVideoMngApiDataType,
    readonly category: FavoriteVideoDetailCategoryType[],
}