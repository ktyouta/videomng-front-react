import { FavoriteVideoVideoMngApiDataType } from "../FavoriteVideoVideoMngApiDataType";
import { FavoriteVideoMemoType } from "../VideoMemo/FavoriteVideoMemoType";
import { FavoriteVideoDetailCategoryType } from "./FavoriteVideoDetailCategoryType";

export type FavoriteVideoCustomDataType = {

    readonly detail: FavoriteVideoVideoMngApiDataType;
    readonly memos: FavoriteVideoMemoType[];
    readonly categorys: FavoriteVideoDetailCategoryType[];
}