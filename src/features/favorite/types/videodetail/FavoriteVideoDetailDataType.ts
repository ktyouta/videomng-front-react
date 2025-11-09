import { FavoriteVideoVideoMngApiDataType } from "./FavoriteVideoVideoMngApiDataType";
import { FavoriteVideoMemoType } from "./videomemo/FavoriteVideoMemoType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";
import { FavoriteVideoDetailCategoryType } from "./videodetailsetting/FavoriteVideoDetailCategoryType";

export type FavoriteVideoDetailDataType = {

    readonly detail: FavoriteVideoVideoMngApiDataType;
    readonly memos: FavoriteVideoMemoType[];
    readonly item: YouTubeDataApiVideoDetailItemType;
    readonly categorys: FavoriteVideoDetailCategoryType[];

}