import { FavoriteVideoDetailDataType } from "../videodetail/FavoriteVideoDetailDataType";
import { FavoriteVideoMemoType } from "../videodetail/videomemo/FavoriteVideoMemoType";
import { ViewStatusType } from "./ViewStatusType";
import { YouTubeDataApiVideoDetailItemType } from "../videodetail/YouTubeDataApiVideoDetailItemType";
import { FolderType } from "./FolderType";

export type FolderResponseType = {
    readonly status: number,
    readonly message: string,
    readonly data: FolderType,
}