import { SearchKeywordCommentResponseDataType } from "./SearchKeywordCommentResponseDataType";

export type SearchKeywordCommentResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: SearchKeywordCommentResponseDataType,
}