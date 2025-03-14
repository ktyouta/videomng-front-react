import { FavoriteVideoVideoMngApiDataType } from "./FavoriteVideoVideoMngApiDataType";
import { FavoriteVideoMemoType } from "./FavoriteVideoMemoType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoDetailDataType = {

    readonly detail: FavoriteVideoVideoMngApiDataType;
    readonly memos: FavoriteVideoMemoType[];
    readonly item: YouTubeDataApiVideoDetailItemType;
}