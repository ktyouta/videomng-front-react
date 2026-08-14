import { SearchWordType } from "./SearchWordType";

export type FavoriteSearchWordResponseType = {
    readonly status: number;
    readonly message: string;
    readonly data: SearchWordType[];
}