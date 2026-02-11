import { YouTubeDataApiVideoDetailItemType } from "../../../../types/youtube/YouTubeDataApiVideoDetailItemType";
import { FavoriteVideoVideoMngApiDataType } from "./FavoriteVideoVideoMngApiDataType";
import { FavoriteVideoDetailCategoryType } from "./videodetailsetting/FavoriteVideoDetailCategoryType";
import { FavoriteVideoMemoType } from "./videomemo/FavoriteVideoMemoType";

export type FavoriteVideoDetailDataType = {
    readonly detail: FavoriteVideoVideoMngApiDataType;
    readonly memos: FavoriteVideoMemoType[];
    readonly item: YouTubeDataApiVideoDetailItemType;
    readonly categorys: FavoriteVideoDetailCategoryType[];
}