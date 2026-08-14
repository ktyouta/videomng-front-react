import { FavoriteSearchWordType } from "./FavoriteSearchWordType";

export type FavoriteSearchWordResponseType = {
    readonly status: number;
    readonly message: string;
    readonly data: FavoriteSearchWordType[];
}