import { FavoriteVideoDetailDataType } from "../VideoDetail/FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "../VideoDetail/VideoMemo/FavoriteVideoMemoType";
import { ViewStatusType } from "./ViewStatusType";
import { YouTubeDataApiVideoDetailItemType } from "../VideoDetail/YouTubeDataApiVideoDetailItemType";

export type ViewStatusResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: ViewStatusType[],
}