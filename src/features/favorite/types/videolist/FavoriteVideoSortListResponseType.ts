import { FavoriteVideoSortType } from "./FavoriteVideoSortType";

export type FavoriteVideoSortListResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: FavoriteVideoSortType[],
}