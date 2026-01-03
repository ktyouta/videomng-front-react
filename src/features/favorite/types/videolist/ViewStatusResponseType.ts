import { ViewStatusType } from "./ViewStatusType";

export type ViewStatusResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: ViewStatusType[],
}