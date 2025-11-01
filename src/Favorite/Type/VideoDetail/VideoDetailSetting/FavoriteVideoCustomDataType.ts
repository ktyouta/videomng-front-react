import { FavoriteVideoVideoMngApiDataType } from "../FavoriteVideoVideoMngApiDataType";
import { FavoriteVideoMemoType } from "../VideoMemo/FavoriteVideoMemoType";
import { FavoriteVideoTagType } from "../VideoTag/FavoriteVideoTagType";
import { FavoriteVideoDetailCategoryType } from "./FavoriteVideoDetailCategoryType";

export type FavoriteVideoCustomDataType = {

    readonly detail: FavoriteVideoVideoMngApiDataType;
    readonly memos: FavoriteVideoMemoType[];
    readonly categorys: FavoriteVideoDetailCategoryType[];
    readonly tags: FavoriteVideoTagType[]
}