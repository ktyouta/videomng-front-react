import { FavoriteVideoTagType } from "./FavoriteVideoTagType";

export type FavoriteVideoTagResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoTagType[],
}