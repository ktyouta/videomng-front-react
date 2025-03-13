import { FavoriteVideoCommentType } from "./FavoriteVideoCommentType";
import { FavoriteVideoDetailType } from "./FavoriteVideoDetailType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoDetailResponseType = {

    readonly detail: FavoriteVideoDetailType;
    readonly comments: FavoriteVideoCommentType[];
    readonly item: YouTubeDataApiVideoDetailItemType;
}