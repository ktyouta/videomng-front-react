import { FavoriteVideoCommentType } from "./FavoriteVideoCommentType";
import { FavoriteVideoDetailDataType } from "./FavoriteVideoDetailDataType";
import { FavoriteVideoDetailType } from "./FavoriteVideoDetailType";
import { YouTubeDataApiVideoDetailItemType } from "./YouTubeDataApiVideoDetailItemType";

export type FavoriteVideoDetailResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoDetailDataType,
}