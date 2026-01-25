import { FavoriteVideoVideoMngApiDataType } from "../FavoriteVideoVideoMngApiDataType";
import { FavoriteVideoMemoType } from "../videomemo/FavoriteVideoMemoType";
import { FavoriteVideoTagType } from "../videotag/FavoriteVideoTagType";
import { FavoriteVideoCustomFolderType } from "./FavoriteVideoCustomFolderType";
import { FavoriteVideoDetailCategoryType } from "./FavoriteVideoDetailCategoryType";

export type FavoriteVideoCustomDataType = {

    readonly detail: FavoriteVideoVideoMngApiDataType;
    readonly memos: FavoriteVideoMemoType[];
    readonly categorys: FavoriteVideoDetailCategoryType[];
    readonly tags: FavoriteVideoTagType[],
    readonly folders: FavoriteVideoCustomFolderType[],
}