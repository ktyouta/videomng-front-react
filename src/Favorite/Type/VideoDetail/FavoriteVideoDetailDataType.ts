import { FavoriteVideoVideoMngApiDataType } from "./FavoriteVideoVideoMngApiDataType";
import { FavoriteVideoMemoType } from "./VideoMemo/FavoriteVideoMemoType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";
import { FavoriteVideoDetailCategoryType } from "./VideoDetailSetting/FavoriteVideoDetailCategoryType";

export type FavoriteVideoDetailDataType = {

    readonly detail: FavoriteVideoVideoMngApiDataType;
    readonly memos: FavoriteVideoMemoType[];
    readonly item: YouTubeDataApiVideoDetailItemType;
    readonly categorys: FavoriteVideoDetailCategoryType[];

}