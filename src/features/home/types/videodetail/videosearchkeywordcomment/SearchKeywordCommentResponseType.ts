import { SearchKeywordCommentType } from "./SearchKeywordCommentType";
import { YouTubeDataApiVideoDetailItemType } from "../YouTubeDataApiVideoDetailItemType";

export type SearchKeywordCommentResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: SearchKeywordCommentType[],
}