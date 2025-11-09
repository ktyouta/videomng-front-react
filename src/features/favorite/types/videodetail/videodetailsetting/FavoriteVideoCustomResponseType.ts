import { FavoriteVideoCustomDataType } from "./FavoriteVideoCustomDataType";

export type FavoriteVideoCustomResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoCustomDataType,
}