import { FavoriteVideoDetailDataType } from "../videodetail/FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "../videodetail/videomemo/FavoriteVideoMemoType";
import { ViewStatusType } from "./ViewStatusType";
import { YouTubeDataApiVideoDetailItemType } from "../videodetail/YouTubeDataApiVideoDetailItemType";

export type ViewStatusResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: ViewStatusType[],
}