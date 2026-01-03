import { FavoriteVideoDetailDataType } from "./FavoriteVideoDetailDataType";

export type FavoriteVideoDetailResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoDetailDataType,
}